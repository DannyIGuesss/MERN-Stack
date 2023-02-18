import React, { useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom"
import { useState } from "react";
import axios from "axios";


const UpdateProduct = (props) => {
    const {id} = useParams();
    const [productInfo, setProductInfo] = useState({
        Title: '',
        Price: 0,
        Description: ''
    })
    const navigate = useNavigate()


    useEffect( () => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setProductInfo(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    const changeHandler = (e) => {
        setProductInfo({...productInfo, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()

            axios.put(`http://localhost:8000/api/updateProduct/${id}`, productInfo)
                
                .then(res => {
                    navigate("/")
                })
                .catch(err => {
                    console.log(err);
                })
    }
    return(
        <form onSubmit={submitHandler}>
            <label>Title: </label>
            <input type= 'text' onChange={changeHandler} value={productInfo.Title} name="Title" />
            <hr/>
            <label>Price:</label>
            <input type='number' onChange={changeHandler} value={productInfo.Price} name="Price" />
            <hr/>
            <label>Description:</label>
            <textarea type='text' onChange={changeHandler} value={productInfo.Description} name="Description" />
            <button>Update Form</button>
        </form>
    )
}

export default UpdateProduct