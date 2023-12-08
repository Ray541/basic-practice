// import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import UserModel from "../UserPopUp/UserModol";
import { useState } from "react";

const UserCardWrapper = styled.div`
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

const UserName = styled.h3`
  position: relative;
  color: #333;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;

  &.card-title::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 13%;
    height: 2px;
    background-color: #f34655;
    transform: scale(0);
    transform-origin: left;
    transition: all 0.3s ease-in;
  }
`;

const UserPhone = styled.p`
  color: #444;
  font-size: 15px;
  padding: 5px;
`;

const UserImage = styled.div`
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

const ViewMore = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  outline: unset;
  border: unset;
  border-radius: 3px;
  background-color: #4689f3;
  color: #f1f1f1;
  transition: all 0.3s ease;
  letter-spacing: 0.7px;

  &:hover,
  &:focus {
    background-color: #6fae63;
    transform: translateX(3px);
  }
`;

function UserCard({ user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (user.length === 0) {
    return <div>No Users Found</div>;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <UserCardWrapper className="col-lg-3 col-md-5 col-sm-7 col-12">
        <UserName className="card-title">{user.Name}</UserName>
        <UserImage>
          <img className="user-image" src={user.Photo} alt="User Photo" />
        </UserImage>
        <UserPhone>{user.Phone}</UserPhone>
        <ViewMore onClick={openModal}>
          <i className="bi bi-door-closed-fill me-1"></i>All Details
        </ViewMore>
      </UserCardWrapper>
      <UserModel isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

UserCard.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({
      Name: PropTypes.string,
      Phone: PropTypes.string,
      Photo: PropTypes.string,
    })
  ]).isRequired,
};

export default UserCard;
