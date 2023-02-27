import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {products , setProducts} = props;
    const [newProduct, setNewProduct] = useState({
        Title: "",
        Price: 0,
        Description: ""
    })


    const inputChangeHandler = (e) => {
        setNewProduct({...newProduct, [e.target.name]: e.target.value})
    }



    const submitHandler = (e) => {
        e.preventDefault();

        axios.post(['http://localhost:8000/api/createProduct'], newProduct)
            .then(res => {
                setProducts([...products, res.data])
            })
            .catch(err => {
                console.log(err);
            })

        setNewProduct({
            Title: "",
            Price: 0,
            Description: ""
        })

    }

    return (
        <div>
            <form className='d-flex justify-content-center  ' onSubmit={submitHandler}>
                <label>Title:</label>
                <input type="text" onChange={inputChangeHandler} value={newProduct.Title} name='Title'/>

                <label>Price:</label>
                <input type="number" onChange={inputChangeHandler} value={newProduct.Price} name='Price'/>

                <label>Description:</label>
                <input type="text" onChange={inputChangeHandler} value={newProduct.Description} name='Description'/>
                <button>Add Product</button>
            </form>
        </div>
    )
}

export default ProductForm;