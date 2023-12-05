/// import React from 'react';
import styled from "styled-components";
import UserCard from "../Card/UserCard";
import "bootstrap/dist/css/bootstrap.css";

// Styled Components for Admin Panel
const AdminPanelWrapper = styled.div`
  position: relative;
  background-color: #4689f3;
  padding: 10px 15px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

const AdminTitle = styled.h2`
  color: black;
  width: 100%;
  @media (width <= 768px) {
    padding-top: 10px;
  }
`;

// Styled Components for UserCard
const UserList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (width <= 768px) {
    margin-top: 10px;
  }
`;

const AdminPanel = () => {
  return (
    <AdminPanelWrapper>
      <AdminTitle>Admin Panel</AdminTitle>
      <UserList>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        {/* We can add as many user card component as we want */}
      </UserList>
    </AdminPanelWrapper>
  );
};

export default AdminPanel;
