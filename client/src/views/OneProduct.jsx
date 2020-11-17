import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OneProduct = props => {
    const [oneProduct, setOneProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
        .then(res => setOneProduct(res.data.product))

    }, [])

    return(
        <div>
            <h1>product info is here</h1>
            <h3>Title: {oneProduct.title} </h3>
            <h3>Price: {oneProduct.price}</h3>
            <h3>Description: {oneProduct.description}</h3>
        </div>
    )
}
export default OneProduct;