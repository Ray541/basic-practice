import React from 'react'
import styled from 'styled-components'

const Services = () => {
    return (
        <StyledServices>
            Services
            <h5>[Unprotected Route]</h5>
        </StyledServices>
    )
}

export default Services

const StyledServices = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #4689F3;
    font-size: 50px;
    font-family: 'Gilroy-Bold', sans-serif;
`;