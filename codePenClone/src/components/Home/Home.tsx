import React from 'react'
import Header from '../Header/Header'
import CodeSection from '../CodeSection/CodeSection'
import Result from '../Result/Result'
import { StyledHomeSection } from "./Home.styled"

const Home = () => {
    return (
        <>
            <StyledHomeSection>
                <Header />
                <CodeSection />
                <Result />
            </StyledHomeSection>
        </>
    )
}

export default Home