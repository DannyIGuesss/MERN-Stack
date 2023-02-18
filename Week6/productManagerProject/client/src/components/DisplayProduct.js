import React, {useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const DisplayProduct = (props) => {
    const {removeFromDom,products, setProducts} = props;

    const deletePerson = (id) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
            .then(removeFromDom(id))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
            setProducts(res.data)
        })
            .catch(err => {
            console.log(err);
        })
    })

    return(
        <div>
            <h1>All Product:</h1>
            {
                products.map((item,idx) => {
                    return (
                        <div key={idx}>
                            <p>{item.Title}</p>
                            <Link to={`/product/${item._id}`} className='d-block'>{item.Title}'s Detail</Link>
                            <Link to={`/updateProduct/${item._id}`}>Update Product</Link>
                            <button onClick={(e => {deletePerson(item._id)})}>Delete</button>
                        </div>
                        
                        
                    )
                    
                })
            }

            
        </div>
    )
}

export default DisplayProduct;