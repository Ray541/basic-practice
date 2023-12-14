import styled from "styled-components";

export const UserCardWrapper = styled.div`
  position: relative;
  border: 1px solid transparent;
  height: auto;
  background-color: #ffffffed;
  padding: 10px;
  margin: 20px;
  border-radius: 7px;
  transition: all 0.3s ease;

  @media (width >= 320px) and (width <= 425px) {
    margin: 20px;
  }

  &:hover,
  &:focus {
    background-color: #fff;
    transform: translateY(-5px);
    box-shadow: 0px 3px 10px #0000009a;

    .user-image {
      transform: scale(1.03);
      filter: grayscale(0);
    }

    .card-title::after {
      transform: scale(1);
      transition-delay: 570ms;
    }
  }

  p {
    margin: 0;
  }
`;

export const UserName = styled.h3`
  position: relative;
  color: #f4ba00;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 10px;

  &.card-title::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 13%;
    height: 2px;
    background-color: #a52a2a;
    transform: scale(0);
    transform-origin: left;
    transition: all 0.3s ease-in;
  }
`;

export const UserPhone = styled.p`
  color: #444;
  letter-spacing: 0.7px;
  font-size: 15px;
  padding: 5px;
`;

export const UserImage = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #c0c0c073;

  .user-image {
    transition: all 0.5s ease;
    transition-delay: 180ms;
    width: 100%;
    height: 100%;
    filter: grayscale(0.7);
  }
`;

export const ActionButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ViewMore = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  outline: unset;
  border: unset;
  border-radius: 3px;
  // background-color: #4689f3;
  background-color: #ad2dff;
  color: #f1f1f1;
  transition: all 0.3s ease;
  letter-spacing: 0.7px;

  &:hover,
  &:focus {
    background-color: #6fae63;
    transform: translateX(3px);
  }
`;

export const DeleteUser = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  outline: unset;
  border: unset;
  border-radius: 3px;
  // background-color: #4689f3;
  background-color: #5497fe;
  color: #f1f1f1;
  transition: all 0.3s ease;
  letter-spacing: 0.7px;

  &:hover,
  &:focus {
    background-color: #FE0000;
    transform: translateX(-3px);
  }
`;
