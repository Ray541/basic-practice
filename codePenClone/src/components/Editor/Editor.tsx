import React, { useState } from 'react'
import { Box, styled } from '@mui/material'
import { StyledEditorHeader, StyledEditorTitle, StyledEditorTitleIcon, StyledCodePlayground } from './Editor.styled'
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

interface EditorProps {
    icon: string;
    color: string;
    heading: string;
}

const Editor: React.FC<EditorProps> = ({ icon, color, heading }) => {

    const [open, setOpen] = useState(true);
    const [code, setCode] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCode(e.target.value);
      };

    return (
        <>
            <StyledEditor style={ open ? {flexGrow: 1} : {flexGrow: 0}}>
                <StyledEditorHeader>
                    <StyledEditorTitle>
                        <StyledEditorTitleIcon style={{ background: color }}>
                            {icon}
                        </StyledEditorTitleIcon>
                        {heading}
                    </StyledEditorTitle>
                    <AspectRatioIcon className='resize-ison' onClick={() => setOpen(prevState => !prevState)} />
                </StyledEditorHeader>
                <StyledCodePlayground name="" id="" value={code} onChange={handleChange} ></StyledCodePlayground>
            </StyledEditor>
        </>
    )
}

export default Editor

const StyledEditor = styled(Box)`
    height: 300px;
    background: #1d1e22;
    flex-grow: 1;
    flex-basic: 0;
    dispaly: flex;
    flex-direction: column;
    border: 1px solid silver;
    overflow: hidden;
`;