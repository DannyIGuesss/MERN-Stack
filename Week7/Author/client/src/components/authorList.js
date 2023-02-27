import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import ('../cssFiles/authorList.css')

const AuthorList = (props) => {

    const {allAuthors, setAllAuthors} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(authors => {
                setAllAuthors(authors.data)
            })
            .catch(err => {
                console.log(err);
            })
    })

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteAuthor/${id}`)
            .then(results => {
                console.log(results);
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            <Link to={`/createAuthor`}>Add an author</Link>
            <h2>We have quotes by:</h2>
            <div>
                <table className="tableBox">
                    <tbody className="row">
                        <tr>
                            <th className="rowOne author">Author</th>
                            <th className="rowOne actions">Actions available</th>
                        </tr>

                            {allAuthors.map((author, index) => {
                                return (
                                    <tr key={index} className="rowNew">
                                        <th className="rowTwo">{author.fullName}</th>
                                        <th>
                                            <Link to={`/editAuthor/${author._id}`}>Edit</Link>
                                            <button onClick={(e => {deleteHandler(author._id)})}>Delete</button>
                                        </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                        
                    </table>
            </div>
        </div>
    )
}

export default AuthorList