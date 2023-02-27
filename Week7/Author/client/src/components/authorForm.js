import react, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const AuthorForm = (props) => {
    const navigate = useNavigate()

    const {allAuthors, setAllAuthors} = props;
    const [errors, setErrors] = useState({})
    const [newAuthor, setNewAuthor] = useState({
        fullName:''
    })

    const inputHandler = (e) => {
        setNewAuthor({...newAuthor, [e.target.name] : e.target.value})
    }

    const cancelHandler = (e) => {
        navigate('/')
    }

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/createAuthor', newAuthor)
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
            <h2>Add a new author:</h2>
            <form onSubmit={submitHandler}>
                <label>Name: </label>
                <input type='text' onChange={inputHandler} value={newAuthor.fullName} name="fullName"/>
                {
                    errors.fullName?
                    <p>{errors.fullName.message}</p>:
                    null
                }
                <button onClick={cancelHandler}>Cancel</button>
                <button>Add author</button>
            </form>
        </div>
    )
}

export default AuthorForm