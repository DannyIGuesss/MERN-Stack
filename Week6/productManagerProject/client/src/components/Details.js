import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams,useNavigate} from "react-router-dom";
const Details = (props) => {
    const {removeFromDom} = props
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    const {id} = useParams(); 
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then( res => {
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    },[id]);

    const deleteProduct = (e) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
            .then(removeFromDom(id))
            .then(navigate('/'))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>{product.Title}</h1>
            <h2>{product.Price}</h2>
            <h2>{product.Description}</h2>
            <button type='submit' onClick={deleteProduct}>Delete</button>
        </div>
    );
}
export default Details;

