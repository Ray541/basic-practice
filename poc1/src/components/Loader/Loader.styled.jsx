import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Load = styled.div`
  // position: absolute;
  // left: 25%;
  border: 3px solid #dadada;
  border-top: 3px solid #141414;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  animation: ${spin} 1.5s infinite;
`;
