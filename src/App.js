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
	const [animation, setAnimation] = useState(['paused', 'normal']);
	const [tasksArray, setTasksArray] = useState([]);
	const [index, setIndex] = useState(0);
	const [currentSlide, setCurrentSlide] = useState(1);
	const [status, setStatus] = useState('todo');
	const [currentPosition, setCurrentPosition] = useState(0);

	const setPosition = (number) => {
		const position = number >= tasksArray.length ? (tasksArray.length - 1) : number < 0 ? 0 : number
		setTranslate(position * -100);
		setCurrentPosition(position)
	}

	const setSlide = (number) => {
		const slide = number >= tasksArray.length ? tasksArray.length : number < 1 ? 1 : number
		setCurrentSlide(slide)
	}

	return(
		<Context.Provider value={{ status, setStatus, currentPosition, setPosition, setTasksArray, tasksArray, setSlide, currentSlide, translate, translateForm, setTranslateForm, index, setIndex, animation, setAnimation }}>
		<div className='app-container'>
			<Form />
			<Column />
			<Slider  >
				<div className='tasks-wrapper' style={{ height: `${tasksArray.length * 100}vh`, transform: `translateY(${translate}vh)`}}>
					{tasksArray.map((task) =>
						<Task
							key={task.id}
							data={{ title: task.title, content: task.content, category: task.category, id: task.id, state: task.state}}
						/>
					)}
				</div>
			</Slider>
		</div>
		</Context.Provider>
	)
}
