
import { useState } from 'react';



const Count = () => {

    const  [person, setCount] = useState({
        firstname: "Issa",
        lastname: "Issifou",
        age: 15
    })


    const incrementCount = () => {
        setCount({ ...person, age: person.age + 1
        })
    }


    return (
        <div>
        <div>
            <p>Prénom : {person.firstname}</p>
            <p>Nom : {person.lastname}</p>
            <p>Age : {person.age}</p>
        </div>
        <div>
            <button className='btn btn-primary' onClick={incrementCount}>Incrémenter</button>
        </div>
        </div>
    )
}

export default Count
