import NavBar  from '../../Components/Nav/NavBar';
import { useState, useRef } from "react";
import Input from '../../Components/Forms/Input';
import InputLabel from '../../Components/Forms/InputLabel';

export default function TheUseRef() {

    const ref = useRef(null)
    const [prefix, setPrefix] = useState('')

    const [firstname, setFirstname] = useState('')

    const inputRef = useRef(null)


    // console.log(inputRef)
    // useEffect(() => {
    //     console.log(ref.current.offsetHeight)
    // }, [])

    const focus = () => {
        inputRef.current.focus()
    }

    return (
        <>
            <NavBar />
            <div>
                {/* <Input label="prefix" value={prefix} onChange={setPrefix} /> */}
            </div>
            <div className="col-4">
                <InputLabel
                    htmlFor="firstname"
                    className="form-label"
                    label="Prénom"
                />
                {/* <Input
                    className="form-control"
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Prénom" 
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                /> */}
                <input 
                    ref={inputRef} 
                    type="text"
                    className="form-control"
                    name="firstname"
                    id="firstname"
                    placeholder="Prénom" 
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)} 
                />
            </div>
            <div className='mt-2 mb-5'>my name is { firstname} </div>

            <button type="button" onClick={focus}>Focus</button>
            <div ref={ref}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia est, 
                nesciunt voluptatibus quos corporis dolorum eum sint omnis praesentium adipisci eligendi, 
                autem, facere necessitatibus odio? Sint numquam vitae ullam magni?
            </div>
        </>
        
    )
}
