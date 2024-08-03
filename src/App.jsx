// import { useState } from 'react'

import Title from './Components/Title';
import Count from './Components/Count';
import CGUCheckbox  from './Components/CGUCheckbox';
import NavBar  from './Components/Nav/NavBar';
import { useState, useEffect } from 'react';
import { useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { check } from './redux/auth/authAction'
import { getSubstring } from './helpers/helpers'
import axios from './api/axios';
import { userInfo } from './redux/user/userAction'
// import { checkAuthentication } from './helpers/helpers'




function App() {

  let navigate = useNavigate();
  const dispatch = useDispatch();

  // S'il n'y a rien dans le local storage, je redirige sur la page de connexion
  // if (!localStorage.getItem('user')) {
  //     navigate('/login')
  // } 

  const user = useSelector((state) => state.user.user);

  console.log('user', user)

  // Check auth
  useEffect(() => {
    
    // checkAuthentication()
  
      if (!user) {

        dispatch(userInfo()).then((result) => {
          console.log("result", result)
          if (result.payload) {
              navigate('/')
          } else {
            navigate('/login')
          }
      })
      
    }

    
  }, [])



  const title = "Bonjour les gens, comment allez-vous"

const handleClick =() => {
  alert("Vous avez cliquez sur le bouton")
}

const showTitle = true

const todos = [
  'Javascript',
  'Html',
  'CSS',
  'PHP'
]

const [isTermAccepted, setIsTermAccepted] = useState(false);

// const handleCheck = (e) => {

//   setChecked(!checked)
  
// }

  return (


    <div>
      <NavBar />
      <div>
        <Title title={title} showTitle={showTitle} />
        <button className='btn btn-info'  type="button" onClick={handleClick}>Cliquer</button>
      </div>
      <div>
        <ul>
          {
            todos.map(todo => (<li key={todo}>{todo}</li>))
          }
        </ul>

        <div style={{ marginTop: '50px' }} className='teste'>
            <Count> </Count>
        </div>
        
      </div>

      <div style={{ marginTop: '30px' }}>

      {/* <label htmlFor="frites">Frites</label> */}
      {/* <input type="checkbox" name="frites" checked={checked} onChange={handleCheck}/> */}
        <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted}/>

        <button disabled={!isTermAccepted}>Valider</button>
      </div>


    </div>
  )
}

export default App
