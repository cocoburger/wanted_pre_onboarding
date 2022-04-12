import {useState} from "react";
import styled, {css} from 'styled-components';
import style from './Toggle.css';
function Toggle() {
    return (
        <Wrapper>
            <div className="box">
                <a href="#" className="active" >기본</a>
                <a href="#" className="">상세</a>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 35px;
`;


export default Toggle;