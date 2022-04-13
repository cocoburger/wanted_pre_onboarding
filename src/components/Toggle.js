import {useState} from "react";
import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';
import style from '../styles/Toggle.css';
function Toggle() {

    const [toggleName, setToggleName] = useState(true);
    const [name, setName] = useState('기본');

    const toggleClick = (name, e) => {
        e.preventDefault();
        if(e.target.text !== name){
            setToggleName(!toggleName);
            setName(name === '기본' ? '상세' : '기본');
        }
    }

    return (
        <Wrapper>
            {toggleName ? (
                <div className="box">
                    <Link to="#" className="active" onClick={(e) => toggleClick(name,e)}>기본</Link>
                    <Link to="#" className="" onClick={(e) => toggleClick(name,e)}>상세</Link>
                </div>
            )  : (
                <div className="box">
                    <Link to="#" className="" onClick={ (e) => toggleClick(name,e)}>기본</Link>
                    <Link to="#" className="active" onClick={(e) => toggleClick(name,e)}>상세</Link>
                </div>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 35px;
`;


export default Toggle;
