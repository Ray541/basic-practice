// import React from 'react';
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { storeText } from "../../firebaseConfig";
import styled from "styled-components";
import UserCard from "../Card/UserCard";
import "bootstrap/dist/css/bootstrap.css";

// Styled Components for Admin Panel
const AdminPanelWrapper = styled.div`
  position: relative;
  background-color: #4689f3;
  padding: 50px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  
  @media (width <= 768px)
  {
    padding: 30px 10px;
  }
`;

const AdminTitle = styled.h1`
  position: relative;
  color: #f7fff7;
  // width: 100%;
  margin-bottom: 40px;
  @media (width <= 768px) {
    padding-top: 10px;
    margin-bottom: 10px;
  }

  &::after
  {
    position: absolute;
    content: "";
    width: 100%;
    padding: 1px;
    left: 0;
    bottom: 0;
    background-color: #f7fff7;
  }
`;

// Styled Components for UserCard
const UserList = styled.div`
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

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userCollection = collection(storeText, "userInfo");
      const userSnapshot = await getDocs(userCollection);
      const userList = userSnapshot.docs.map((doc) => doc.data());
      setUsers(userList);
    };
    fetchUsers();
  }, []);

  return (
    <AdminPanelWrapper>
      <AdminTitle>Admin Panel</AdminTitle>
      <UserList>
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </UserList>
    </AdminPanelWrapper>
  );
};
export default AdminPanel;
