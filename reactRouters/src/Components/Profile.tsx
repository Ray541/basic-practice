import React from 'react'
import styled from 'styled-components'

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
    width: 100%;
    height: 100vh;
    background-color: #dadada;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Gilroy-Bold', sans-serif;
    font-size: 30px;
`;