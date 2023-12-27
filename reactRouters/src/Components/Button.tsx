import React from 'react'
import styled from 'styled-components'

const Button = () => {
    return (
        <StyledButton />
    )
}

export default Button

export const StyledButton = styled.button`
    padding: 5px 20px;
    cursor: pointer;
    outline: none;
    border: 1px solid black;
    box-shadow: 4px 4px 0px black;
    transition: all .2s ease;
    border-radius: 5px;
    
    &:hover,
    &:focus{  
        transform: translateY(4px) translateX(4px);
        box-shadow: 0px 0px 0px black;
    }
`;