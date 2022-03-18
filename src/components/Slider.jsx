import arrow from "../assets/icons/arrow.svg"
import { useContext, useEffect} from 'react'
import { Context } from "../context"

export default function Slider({children}) {
    
    const {currentPosition, setPosition, tasksArray, setStatus, setSlide, currentSlide, translateForm} = useContext(Context)
	
    useEffect(() => {
		if (tasksArray[0] && translateForm !== 100) {
			setStatus(tasksArray[currentPosition].state)
		}
    })
    
    return (
        <div className="slider-container" style={{ right: `${translateForm}%`}}>
            {children}
            <div className="task-navigation">

                <img onClick={() => { 
					setSlide(currentSlide - 1)
                    setPosition(currentPosition - 1)
                }}
                className="navigation-arrow" 
                src={arrow} alt="" />

                <span>{currentSlide} / {tasksArray.length}</span>

                <img onClick={() => {
					setSlide(currentSlide + 1)
                    setPosition(currentPosition + 1)
                }} 
                className="navigation-arrow"
                src={arrow} alt="" />

            </div>
        </div>
    )
}