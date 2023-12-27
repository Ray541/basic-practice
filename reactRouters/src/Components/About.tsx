import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (
        <StyledAbout>
            About
            <h5>[Unprotected Route]</h5>
        </StyledAbout>
    )
}

export default About

const StyledAbout = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #DD9624;
    font-size: 50px;
    font-family: 'Gilroy-Bold', sans-serif;
`;