import NavBar  from '../../Components/Nav/NavBar';
import { useState, useMemo } from "react";
import Input from '../../Components/Forms/Input';
import InputLabel from '../../Components/Forms/InputLabel';

export default function TheUseMemo() {

    const [firstname, setFirstname] = useState('')
    const [password, setPassword] = useState('')
    


    const passwordSecurity = (password) => {
        // Fausse lenteur
        let startTime = performance.now();

        while(performance.now() - startTime < 200) {
        }

        // while (performance.now() - startTime < 200) {
            
        // }

        if (password.length < 3) {
            return 'Faible'
        } else if (password.length < 6) {
            return 'Moyen'
        }

        return 'Fort';
    }

    const security = useMemo(() => {
        return passwordSecurity(password)
    }, [password])

  return (
    <>
    <NavBar />
    <div className='container mt-5'>
        <div className="col-4">
            <InputLabel
                htmlFor="firstname"
                className="form-label"
                label="Prénom"
            />
            <Input
                className="form-control"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Prénom" 
                value={firstname}
                // onChange={setTitle}
                onChange={(e) => setFirstname(e.target.value)}
                
            />
        </div>
        <div className="col-4">
            <InputLabel
                htmlFor="Mot de passe"
                className="form-label"
                label="Prénom"
            />
            <Input
                className="form-control"
                type="text"
                name="password"
                id="password"
                placeholder="Mot de passe" 
                value={password}
                // onChange={setTitle}
                onChange={(e) => setPassword(e.target.value)}
                
            />
        </div>
        <div>{ security } </div>
    </div>
      
    </>
  )
}
