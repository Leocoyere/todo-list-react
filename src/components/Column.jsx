import React, { useContext } from 'react';
import { Context } from "../context"

export default function Column() {
    
    const {status, setStatus, setTranslateForm, animation, setAnimation} = useContext(Context)

    return (
        <div className={`column-container ${status}`} style={{ animationPlayState: animation[0], animationName: animation[1] }}>
            <div className={`column-btn right ` + (status === 'task' ? "none" : "")} onClick={() => {setTranslateForm(100); setAnimation(['running', 'column-right']); setStatus('task');}}><span>+</span></div>
            <div className={`column-btn left ` + (status === 'done' || status === 'todo' ? "none" : "")} onClick={() => {setTranslateForm(0); setAnimation(['running', 'column-left']); setStatus('todo');}}><span>{">"}</span></div> 
        </div>
    )
}