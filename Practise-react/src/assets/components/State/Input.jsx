import React from 'react'
import { useState } from 'react'
import "./input.css"


export default function Input() {
    const [todo, setTodo] = useState([{ id: "1", name: "Khadja" }])
    const [todoInp, setTodoInp] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (todoInp === "") {
            return
        }
        setTodo([...todo, { id: Math.random(), name: todoInp }])
        setTodoInp("")
    }
    function handleDelete(item) {
        setTodo(todo.filter((b) => b.id !== item.id));
    }
    return (
        <div className='counter'>
            <button onClick={() => setTodo([])}>Close All</button>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todoInp} onChange={(e) => setTodoInp(e.target.value)} />
                <button>sumbit</button>
            </form>
            <ul>
                {todo.map((item, i) => <li key={i}>
                    <span>{item.name}</span>
                    <button onClick={() => handleDelete(item)}>X</button>
                </li>
                )}
            </ul>
        </div>
    )
}
