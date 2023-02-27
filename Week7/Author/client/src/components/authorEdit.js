import react, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

const AuthorEdit = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()

    const {allAuthors, setAllAuthors} = props;
    const [errors, setErrors] = useState({})
    const [editedAuthor, setEditedAuthor] = useState({
        fullName:''
    })
    useEffect( () => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res => {
            setEditedAuthor(res.data)
        }, [])
        .catch(err => {
            console.log(err);
        })
    },[])
    

    const inputHandler = (e) => {
        setEditedAuthor({...editedAuthor, [e.target.name] : e.target.value})
    }

    const cancelHandler = (e) => {
        navigate('/')
    }

    const submitHandler = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/updateAuthor/${id}`, editedAuthor)
            .then(res => {
                setAllAuthors([...allAuthors, res.data])
                navigate('/')
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })

    }

    return(
        <div>
            <Link to={"/"}>Home</Link>
            <h2>Edit this author:</h2>
            <form onSubmit={submitHandler}>
                <label>Name: </label>
                <input type='text' onChange={inputHandler} value={editedAuthor.fullName} name="fullName"/>
                {
                    errors.fullName?
                    <p>{errors.fullName.message}</p>:
                    null
                }
                <button onClick={cancelHandler}>Cancel</button>
                <button>Edit author</button>
            </form>
        </div>
    )
}

export default AuthorEdit