import { useContext } from 'react'
import { Context } from "../context"

export default function Task({ data }) {

    const buttonText = data.state === 'todo' ? 'done' : 'undo'

    const {status, setStatus, setTasksArray, tasksArray, setSlide, currentSlide, setPosition, currentPosition} = useContext(Context)

    function handleDelete(id) {
        setTasksArray(
            tasksArray.filter((task) =>  
                task.id !== id
            )
        )
        setSlide( currentSlide - 1 )
        setPosition(currentPosition - 1)
    }

    function handleChange(id) {
        const task = tasksArray.filter((task) => task.id === id)
        const newTasks = tasksArray.filter((task) => task.id !== id)
        task[0].state = task[0].state === 'done' ? 'todo' : 'done'
        setTasksArray([...newTasks, ...task])
        setStatus(task[0].state)
    }
    
    return (
        <div className={`task-container ${status}`}>
            <div className="column">
                <h1 className="title">{data.title}</h1>
                <h2 className="subtitle">{data.category}</h2>
                <p className="task-content">{data.content}</p>
                <div className="btn-container">
                    <button className={"btn"} onClick={() => handleChange(data.id)}>{buttonText}</button>
                    <button className={"btn"} onClick={() => handleDelete(data.id)}>Delete</button>
                </div>
            </div>
            <div className={"image-container"}>
                <span>{data.state}</span>
            </div>
        </div>
    )
}