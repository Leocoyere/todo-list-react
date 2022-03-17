import React, { useContext, useState } from 'react';
import { Context } from "../context"

export default function Form() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    
    const {status, translateForm, setTasksArray, setIndex, index} = useContext(Context)

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setTasksArray((previous) => [...previous, {id: index, title: title, category: category, content: content, state: 'todo'}])
        setIndex((previous) => previous + 1)
    }

    return (
        <div className={`form-container ${status}`} style={{left: `${translateForm - 100}%`}}>
            <h1 className="title">Add a task</h1>
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
                    <input type="text" id="content" onChange={(e) => setContent(e.target.value)} className="form-input" />
                </div>
                <div className="btn-container">
                    <button className="btn" onClick={(e) => onSubmitHandler(e)}>Create</button>
                </div>
            </form>
        </div>
    )
}