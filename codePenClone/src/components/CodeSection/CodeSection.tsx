import React from 'react'
import Editor from '../Editor/Editor'
import { StyledCodeSection } from "./CodeSection.styled"

const CodeSection = () => {
    return (
        <StyledCodeSection>
            <Editor heading="HTML" icon="/" color="#FF3C41" />
            <Editor heading="CSS" icon="*" color="#0EBEFF" />
            <Editor heading="JavaScript" icon="()" color="#FCD000" />
        </StyledCodeSection>
    )
}

export default CodeSection