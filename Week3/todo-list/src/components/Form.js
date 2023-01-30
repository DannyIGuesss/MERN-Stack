import React from 'react';
import {useState} from 'react';

const Form = ({list,setList, setState}) => {

    const [input, setInput] = useState()

    const addListItem = (e) => {
        e.preventDefault()

        const todoData = {
            text: input,
            complete: false
        };

        setList([...list, todoData])
        setInput("")
    }

    return (
        <div>
            <form onSubmit={addListItem}>
                <label>Add New Goal</label>
                <input type='text' value={input} onChange={ (e) => setInput(e.target.value)}/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Form