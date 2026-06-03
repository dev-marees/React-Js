import { useEffect, useState } from 'react'
import '../style/todo.css'


function Todo(params) {

    const [todos, setTodos] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [filterQuery, setFilterQuery] = useState('')
    const [updateInputValue, setUpdateInputValue] = useState('')
    const [count, setCount] = useState(0)
    const [editingIndex , setEditingIndex] = useState(null)
    const [deleteIndex , setDeleteIndex] = useState(null)
    const [time, setTime] = useState(new Date())
    const [createdAt, setCreatedAt] = useState('')
    // const [updatedAt, setUpdatedAt] = useState('')

    const addTodo = (e) => {
        e.preventDefault()
        setTodos([...todos, inputValue])
        console.log('todos::', todos);
        console.log('inputValue::', inputValue);
        
        setCount(count+1)
        setCreatedAt(time.toLocaleTimeString())
        setInputValue('')
    }

    const getTodoContent = (e) => {
        setInputValue(e.target.value)
    }

    const getUpdatedTodoContent = (e) => {
        setUpdateInputValue(e.target.value)
    }

    const updateTodoList = (idx) => {
        let updatedTods = [...todos]
        updatedTods[idx] = updateInputValue
        setTodos(updatedTods)
        setEditingIndex(null)
    }

    useEffect (() => {
        console.log('todos:', todos);
        
        const filtered = todos.filter(todo => 
            todo.toLowerCase().includes(filterQuery.toLowerCase())
        )
        setFilteredItems(filtered)
    }, [filterQuery, todos])

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () => clearInterval(timerId)
    }, [])
  
    return (
        <div className='app'>
            <div className="todo-container">
                
                <h1 className="todo-title">Todo App</h1>
                <div className='timerContainer'>
                    <span>{time.toLocaleTimeString()}</span>
                </div>
                <form className="todo-form">
                    <input className="todo-input" value={inputValue} onChange={getTodoContent} />
                    <button className="add-btn" onClick={addTodo}>Add</button>
                </form>
                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input className="search-input" type="text" onChange={(e) => setFilterQuery(e.target.value)} placeholder="Search todos..."/>
                </div>
                <table>
                    <th>S.no</th>
                    <th>Todo</th>
                    <th>Action</th>
                    <th>Created At</th>
                        {filteredItems.map((todo, idx) => (
                            <tr key={idx}>
                                <td>
                                    {idx+1}
                                </td>
                                <td>
                                    {todo}
                                </td>
                                <td>
                                    <button className='edit-btn' onClick={()=>setEditingIndex(idx)}>Edit</button>
                                    {
                                        editingIndex === idx && (
                                            <div className="modal">
                                                <div className="modal-content">
                                                    <h2>Edit Todo</h2>
                                                    <input type="text" placeholder="Enter todo name" onChange={getUpdatedTodoContent} defaultValue={todo}/>
                                                    <div className="modal-actions">
                                                        <button onClick={()=>updateTodoList(idx)}>Update</button>
                                                        <button onClick={() => {setEditingIndex(null)}}>Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <button className='delete-btn' onClick={() => {
                                        let updatedTods = [...todos]
                                        updatedTods.splice(idx, 1)
                                        setTodos(updatedTods)
                                    }}>Delete</button>
                                </td>
                                <td>
                                    {createdAt}
                                </td>
                            </tr>
                        ))}
                </table>                
            </div>
        </div>
    )
}

export default Todo