import React, { useContext } from 'react';
import { Context } from "../context"

export default function Column() {
    
    const {status, animation, handleSectionChange} = useContext(Context)

    return (
        <div className={`column-container ${status}`} style={{ animationPlayState: animation[0], animationName: animation[1] }}>
            <div className={`column-btn right ` + status} onClick={() => handleSectionChange('form')}><span>+</span></div>
            <div className={`column-btn left ` + status} onClick={() => handleSectionChange('tasks-list')}><span>{">"}</span></div> 
        </div>
    )
}