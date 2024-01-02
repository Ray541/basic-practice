import styled from "styled-components";

export const StyledEditorHeader = styled.div`
    width: 100%;
    height: auto;
    background: #101010;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .resize-ison {
        color: white;
        cursor: pointer;
    }
`;

export const StyledEditorTitle = styled.span`
    background: #1d1e22;
    color: #dadada;
    letter-spacing: 1px;
    padding: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledEditorTitleIcon = styled.span`
    width: 15px;
    height: 15px;
    color: #101010;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    padding: 10px;
    margin-right: 7px;
    border-radius: 5px;
`;

export const StyledCodePlayground = styled.textarea`
    width: 100%;
    height: 100%;
    resize: unset;
    border: unset;
    outline: unset;
    padding: 10px;
    color: #dadada;
    background: #1d1e22;

`;