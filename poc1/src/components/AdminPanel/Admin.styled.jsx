import styled from "styled-components";

export const AdminPanelWrapper = styled.div`
  position: relative;
  // background-color: #4689f3;
  // background-image: linear-gradient(to top, #a1c4fd 0%, #c2e9fb 100%);
  background-image: linear-gradient(-40deg, #b721ff 0%, #21d4fd 100%);
  padding: 50px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  @media (width <= 768px) {
    padding: 30px 10px;
  }
`;

export const AdminTitle = styled.h1`
  position: relative;
  color: #f7fff7;
  // width: 100%;
  margin-bottom: 40px;
  @media (width <= 768px) {
    padding-top: 10px;
    margin-bottom: 10px;
  }

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    padding: 1px;
    left: 0;
    bottom: 0;
    background-color: #f7fff7;
  }
`;

export const UserList = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (width <= 768px) {
    margin-top: 10px;
  }
`;
