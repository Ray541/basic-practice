import React from 'react'
import styled from 'styled-components'
// import { Route, Redirect } from 'react-router-dom'

const Profile = () => {
    return (
        <StyledProfile>
            Profile
            <h4>[Protected Route]</h4>
        </StyledProfile>
    )
}

export default Profile

const StyledProfile = styled.div`
    width: 50%;
    height: 400px;
    background-color: silver;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Gilroy-Bold', sans-serif;
    font-size: 30px;
`;