// import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

const UserCardWrapper = styled.div`
  border: 1px solid transparent;
  background-color: #ffffffed;
  padding: 10px;
  margin: 25px;
  border-radius: 2px;
  transition: all 0.3s ease;

  @media (width >= 320px) and (width < 425px) {
    margin: 20px;
  }

  &:hover,
  &:focus {
    background-color: #fff;
    transform: translateY(-5px);
    box-shadow: 0px 3px 10px #0000009a;

    .user-image {
      transform: scale(1.09);
      filter: grayscale(0);
    }

    .card-title::after
    {
      transform: scale(1);
      transition-delay: 300ms;
    }
  }

  p {
    margin: 0;
  }
`;

const UserName = styled.h3`
  position: relative;
  color: #333;
  font-size: 23px;
  font-weight: 700;
  margin-bottom: 10px;

  &.card-title::after
  {
    position:absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 13%;
    height: 2px;
    background-color: #f34655;
    transform: scale(0);
    transform-origin: left;
    transition: all 0.5s ease;
  }
`;

const UserPhone = styled.p`
  color: #444;
  font-size: 15px;
  padding: 5px;
`;

const UserImage = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #c0c0c073;

  .user-image {
    transition: all 0.5s ease;
    transition-delay: 165ms;
    width: 100%;
    height: 50%;
    filter: grayscale(0.5);
  }
`;

const ViewMore = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  outline: unset;
  border: unset;
  border-radius: 3px;
  background-color: #4689f3;
  color: #f1f1f1;
  // color: #141414;
  transition: all 0.3s ease;
  letter-spacing: 0.7px;
  
  &:hover {
    background-color: #f34655;
    transform: translateX(3px);
  }
`;

function UserCard() {
  return (
    <UserCardWrapper className="col-lg-3 col-md-4 col-sm-8 col-11">
      <UserName className="card-title">John Doe</UserName>
      <UserImage>
        <img
          className="user-image"
          src="./src/assets/react.svg"
          alt="User Photo"
        />
      </UserImage>
      <UserPhone>+1234567890</UserPhone>
      <ViewMore>View All Details</ViewMore>
    </UserCardWrapper>
  );
}

export default UserCard;
