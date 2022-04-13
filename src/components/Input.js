import {useState} from "react";
import styles from '../styles/Input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";



function Input () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState({
        type : 'password',
        visible: false
    });
    const [eye, setEye] = useState(true)

    const onEmailValidation = (e) => {
        setEmail(e.currentTarget.value)
    }


    const showPassword = () => {
        setEye(!eye);

        if(eye) {
            setPassword(() => {
                return {type :'text', visible: true}
            })
        }else {
            setPassword(() => {
                return {type :'password', visible: true}
            })
        }

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
               <div className='inputWrapper'>
                   <input type={password.type}/>
                   {eye ? (
                   <FontAwesomeIcon className='icon' icon={faEye} onClick={showPassword} />
                   ) : (
                   <FontAwesomeIcon className='icon' icon={faEyeSlash} onClick={showPassword} />
                   )
                   }
               </div>
           </form>

        </div>
    )
}


export default Input;
