import {useState} from "react";
import styles from '../styles/Input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";



function Input () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState({
        type : 'password',
        visible: false
    });
    const [eye, setEye] = useState(true)
    const [isEmail, setIsEmail] = useState(false);
    const onEmailValidation = (e) => {
        let emailVal = e.currentTarget.value;
        setEmail(emailVal);

        if(!validation(emailVal)) {

            return setIsEmail(false);
        }
        return setIsEmail(true);

    }

    const validation = (email) => {
        const re = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return re.test(email);
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
               <div className='inputWrapper'>
                <input type={email} value={email} onChange={(e) => onEmailValidation(e)}/>
                   {
                       isEmail ? (<FontAwesomeIcon className='iconCheck' icon={faCheck} style={{color:'green'}}/> ) : (
                           <FontAwesomeIcon className='iconCheck' icon={faCheck} style={{color:'red'}}/>
                       )
                   }

               </div>
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
