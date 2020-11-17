import React, { useState, useEffect } from 'react';
import axios from "axios";
import Form from '../components/Form';
import { navigate } from '@reach/router';

const Main = props => {
    const [products, setProducts] = useState();
    const [update, setUpdate] = useState(0);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
        .then(res => setProducts(res.data.products))
    }, [update])
    const [form, setForm] = useState({
        title: "",
        price: "",
        description: ""
    })
    const [error, setError] = useState({});

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/products/create`, form)
        .then(res => {
            if(res.data.error){
            console.log(res.data.error.errors)
            setError(res.data.error.errors)
            } else {
                console.log("it worked!");
                navigate("/")
            }
        })
        .catch(console.log("something went wrong"));
    }
    const removeProduct = _id => {
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
        .then(res => setUpdate(update+1))
        .catch(err => console.log(err))
    }

    return(
        <div>
            <Form onSubmitHandler={onSubmitHandler} form={form} onChangeHandler={onChangeHandler} error={error} />
            <hr/>
            <ul>
                <h1>All products:</h1>
            
                {
                    products ?
                    products.map((prod, i) =>{
                        return <li>
                            <td><a href={`http://localhost:3000/${prod._id}`}>{prod.title}</a></td><br/>
                            <td><a href={`http://localhost:8000/api/products/update/${prod._id}`} className="btn btn-info">Update</a>||
                            
                            <button onClick={() => removeProduct(prod._id)}className="btn btn-danger">button</button></td>
                            <hr/>
                            </li>
                    }): ""
                }
                
            </ul>
        </div>
    )
}

export default Main;