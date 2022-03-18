import React, { useState } from 'react';
import './scss/main.scss';
import Column from './components/Column';
import Task from './components/Task';
import Slider from './components/Slider';
import Form from './components/Form';
import { Context } from './context';

export default function App() {

	const [translate, setTranslate] = useState(0);
	const [translateForm, setTranslateForm] = useState(0);
	const [animation, setAnimation] = useState(['paused', '']);
	const [tasksArray, setTasksArray] = useState([]);
	const [index, setIndex] = useState(1);
	const [currentSlide, setCurrentSlide] = useState(1);
	const [status, setStatus] = useState('todo');
	const [currentPosition, setCurrentPosition] = useState(0);
	const [error, setError] = useState('');

	const setPosition = (number) => {
		const position = number >= tasksArray.length ? (tasksArray.length - 1) : number < 0 ? 0 : number
		setTranslate(position * -100);
		setCurrentPosition(position)
	}

	const setSlide = (number) => {
		const slide = number >= tasksArray.length ? tasksArray.length : number < 1 ? 1 : number
		setCurrentSlide(slide)
	}

	const handleSectionChange = (section) => {
        const [side, theme] = section === 'form' ? ['right', 'task'] : ['left', 'todo']
        setTranslateForm(prev => prev === 0 ? 100 : 0)
        setAnimation(['running', `column-${side}`])
        setStatus(theme)
		setError(false)
    }

	return(
		<Context.Provider value={{ status, setStatus, currentPosition, setPosition, setTasksArray, tasksArray, setSlide, currentSlide, translate, translateForm, setTranslateForm, index, setIndex, animation, setAnimation, handleSectionChange, error, setError}}>
		<div className='app-container'>
			<Form />
			<Column />
			<Slider>
			{ tasksArray.length > 0 ? 
				<div className='tasks-wrapper' style={{ height: `${tasksArray.length * 100}vh`, transform: `translateY(${translate}vh)`}}>
					{
						tasksArray.map((task) =>
							<Task
								key={task.id}
								data={{ title: task.title, content: task.content, category: task.category, id: task.id, state: task.state}}
							/>
						)
					} 
				</div>
			: 	
				<div className='tasks-wrapper' style={{ height: `100vh`, transform: `translateY(0vh)`}}>
					<Task
						data={{ title: "Welcome!", content: "This is a TO-DO list manager using React.JS, get started and create tasks by clicking on the '+' button. You can change the status of the tasks by clicking on the 'done' button. When you change the status of a task, it will go at the end of the tasks list. You can also delete your tasks by clicking on the 'delete' button. ENJOY!", category: "no tasks", id: 0, state: 'todo'}}
						/> 
				</div>
			}
			</Slider>
		</div>
		</Context.Provider>
	)
}
