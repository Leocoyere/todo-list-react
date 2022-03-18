import React, { useContext, useState } from 'react';
import { Context } from "../context"

export default function Form() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    
    const {status, translateForm, setTasksArray, tasksArray, setIndex, index, handleSectionChange, error, setError} = useContext(Context)

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(!title || !category || !content) {
            setError('Please fill all the fields')
            return
        }
        const todoNumber = tasksArray.reduce(
            (prev, curr) => curr.state === 'todo' ? prev + 1 : prev,
            0
        )
        if(todoNumber >= 5) {
            setError('Max todo tasks number reached')
            return
        }
        setTasksArray((previous) => [...previous, {id: index, title: title, category: category, content: content, state: 'todo'}])
        setIndex((previous) => previous + 1)
        handleSectionChange('tasks-list')
    }

    return (
        <div className={`form-container ${status}`} style={{left: `${translateForm - 100}%`}}>
            <div className="form-wrapper">
                <h1 className="title">Add a task</h1>
                { error ? <h2 className="subtitle">{error}</h2> : null}
                <form className="form">
                    <div className="input-container"> 
                        <label htmlFor="title">title</label>
                        <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} className="form-input" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="category">category</label>
                        <input type="text" id="category" onChange={(e) => setCategory(e.target.value)} className="form-input" />
                    </div>
                    <div className="input-container large tall">
                        <label htmlFor="content">content</label>
                        <textarea spellcheck="false" id="content" onChange={(e) => setContent(e.target.value)} className="form-input" />
                    </div>
                    <div className="btn-container">
                        <button className="btn" onClick={(e) => onSubmitHandler(e)}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}