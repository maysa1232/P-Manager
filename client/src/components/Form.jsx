import React from 'react';

const Form = props => {

    return(
        <div>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <form onSubmit={props.onSubmitHandler}>
                        <div className="form-group">
                            <label>Title:</label>
                        <input type="text" name="title" className="form-control" onChange={props.onChangeHandler} value={props.form.title}/>
                        {
                            props.error.title ?
                            <span className="text-danger">{props.error.title.message}</span>
                                :""
                        }
                        </div>
                        <div className="form-group">
                            <label>Price:</label>
                        <input type="text" name="price" className="form-control" onChange={props.onChangeHandler} value={props.form.price}/>
                        {
                            props.error.price ?
                            <span className="text-danger">{props.error.price.message}</span>
                                :""
                        }
                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                        <input type="text" name="description" className="form-control" onChange={props.onChangeHandler} value={props.form.description}/>
                        {
                            props.error.description ?
                            <span className="text-danger">{props.error.description.message}</span>
                                :""
                        }
                        </div>
                        <input type="submit" className="btn btn-info"/>
                    </form>
                </div>
                <div className="col-sm-2"></div>
            </div>
            <br/>
        </div>
    )
}
export default Form;