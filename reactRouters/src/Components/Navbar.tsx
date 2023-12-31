import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton } from './Button'

interface NavbarProps {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, login, logout }) => {

    return (
        <NavbarStyled>
            <Ul>
                <Li to="/">Home</Li>
                <Li to="/about">About</Li>
                <Li to="/services">Services</Li>
                <Li to="/registration">Registration</Li>
                <Li to="/profile">Profile</Li>
            </Ul>
            <ButtonHolder>
                {isLoggedIn ? (
                    <StyledButton onClick={logout}>
                        Log Out
                    </StyledButton>

                ) : (<StyledButton onClick={login}>
                    Log In
                </StyledButton>)}
            </ButtonHolder>
        </NavbarStyled>
    )
}

export default Navbar


const NavbarStyled = styled.div`
    padding: 15px 0 15px 0;
    border-bottom: 1px solid silver;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Ul = styled.ul`
    margin: 10px 0 10px 0;
    list-style-type: none;
    display: flex;
`;

const Li = styled(Link)`
    text-decoration: none;
    color: #111;
    margin: 0 10px 0 10px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.7px;
    font-family: 'Gilroy-Bold', sans-serif;
    transition: color .2s ease;
    outline: unset;

    &:hover,
    &:focus{
        color: #DD9624;
    }
`;

const ButtonHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;