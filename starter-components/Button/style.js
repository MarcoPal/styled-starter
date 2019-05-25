import styled from 'styled-components/macro';
import {buttonStyle} from "styled-system";

const buttonReset = styled.button`
    display: inline-block;
    border: none;  
    margin: 0;
    text-decoration: none;
    cursor: pointer;  
    transition: background .2s ease-in-out, 
                color .2s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
`;


export const Button = styled(buttonReset)`

    background: #0069ed;
    color: #ffffff;
    
    font-family: sans-serif;
    font-size: 1.6rem;
    
    padding: 1.6rem 3.2rem;
    text-align: center;
    
    border-radius: 3rem;

    &:hover,
    &:focus {
        background: #0053ba;
    }

    &:active {
        transform: scale(0.99);
    }

    ${buttonStyle}
`;