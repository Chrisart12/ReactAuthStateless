import NavBar  from '../../Components/Nav/NavBar';
import { useState, useEffect } from "react";
import Input from '../../Components/Forms/Input';
import InputLabel from '../../Components/Forms/InputLabel';


export default function Timer() {

const [timer, setTimer] = useState(10)
const [secondsLeft, setsecondsLeft] = useState(timer)

// const myInterval = setInterval(function () {
//     // setTimer(timer - 1);
// }, 1000);

const changeTimer = (e) => {
    setTimer(e.target.value)
    setsecondsLeft(e.target.value)
}

useEffect(() => {

    const myInterval = setInterval(function () {
        setsecondsLeft(v => {
            if( v <= 1) {
                clearInterval(myInterval)
                return 0
            }
            return v - 1
        });
    }, 1000);

    return () => {
        clearInterval(myInterval)
    }

}, [timer])


return (
    <>
        <NavBar />
        <div className='container mt-5'>
        <div className="col-4">
            <InputLabel
                htmlFor="timer"
                className="form-label"
                label="Timer"
            />
            <Input
                className="form-control"
                type="text"
                name="timer"
                id="timer"
                placeholder="Modifier le timer" 
                value={timer}
                // onChange={setTitle}
                // onChange={(e) => setTimer(e.target.value)}
                onChange={changeTimer}
            />
        </div>
        <div className='mt-3 fw-bold'>{ secondsLeft }</div>

    </div>
    </>
  )
}
