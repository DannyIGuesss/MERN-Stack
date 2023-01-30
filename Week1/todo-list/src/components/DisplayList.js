import React, {useState} from "react";
import "./DisplayList.css"

const DisplayList = ({list, setList}) => {

    const deleteToDo = (inxDel) => {
        const filteredList = list.filter((todo,listItem) => {
            return listItem !== inxDel
        })

        setList(filteredList)
    }

    const checkCompleteBox = (indx) => {
        const newList = list.map((newTodo, index) => {
            if(index === indx) {
                newTodo.complete = !newTodo.complete
            }

            return newTodo
        })
        setList(newList)
    }

    return (
        <>
            {list.map((toDoItem, i) => {

                const lineThroughIfCompleted = []

                if(toDoItem.complete){
                    lineThroughIfCompleted.push("lineThrough")
                }

                return (
                    <div key={i}>
                        <span className= {lineThroughIfCompleted}>
                            {toDoItem.text}
                        </span>
                        <input onChange={(e) => {checkCompleteBox(i)}} checked = {toDoItem.complete} type='checkbox'/>
                        <button onClick={(e) => {deleteToDo(i)}}>Delete</button>
                    </div>
                )
            })}
    
        </>
    )
}

export default DisplayList