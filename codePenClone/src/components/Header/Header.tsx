import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import { StyledLogoHeading } from "../Header/Header.styled"

const Header = () => {
    return (
        <StyledAppBar>
            <Toolbar>
                <StyledLogoHeading>CodePen Clone</StyledLogoHeading>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header

const StyledAppBar = styled(AppBar)`
    position: sticky;
    top: 0;
    background: #060606;
`;