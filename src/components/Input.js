import {useState} from "react";
import styles from '../styles/Input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-solid-svg-icons";



function Input () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onEmailValidation = (e) => {
        setEmail(e.currentTarget.value)
    }

    const onPasswordValidation = (e) => {
        setEmail(e.currentTarget.value)
    }

    function login (e)
    {
        e.preventDefault();
    }
    return (
        <div className='login-wrapper'>
           <form style={styles.form} onSubmit={login}>
               <label>Email</label>
               <input type={email} value={email} onChange={(e) => onEmailValidation(e)}/>
               <label>Password</label>
               <input type={password} value={password} onChange={(e) => onPasswordValidation(e)}/>
               <FontAwesomeIcon icon={faEye} />
           </form>

        </div>
    )
}


export default Input;
