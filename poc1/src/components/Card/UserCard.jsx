// import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import PropTypes from "prop-types";
import UserModel from "../UserPopUp/UserModal";
import {
  UserCardWrapper,
  UserName,
  UserImage,
  UserPhone,
  ViewMore,
} from "./UserCard.styled";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  onSnapshot,
  query,
  where,
  collection,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDOusYzC-DiSJeWG1iXJDFe2qW6OmWozk",
  authDomain: "userdetails-6016a.firebaseapp.com",
  projectId: "userdetails-6016a",
  storageBucket: "userdetails-6016a.appspot.com",
  messagingSenderId: "453096135201",
  appId: "1:453096135201:web:5f9ee3876662e6f0ea6160",
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
getStorage(app);

function UserCard({ user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Create a reference to the user document
    const usersRef = collection(firestore, "userInfo");

    // Create a query to get the document based on the phone number
    const q = query(usersRef, where("Phone", "==", user.Phone));

    // Set up a real-time listener for the query
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Update the state with the latest data
        setUpdatedUser(doc.data());
      });
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [user.Phone]);

  if (user.length === 0) {
    return <div>No Users Found</div>;
  }

  return (
    <>
      <UserCardWrapper className="col-lg-3 col-md-5 col-sm-7 col-12">
        <UserName className="card-title">{updatedUser.Name}</UserName>
        <UserImage>
          <img
            className="user-image"
            src={updatedUser.Photo}
            alt={updatedUser.Name}
          />
        </UserImage>
        <UserPhone>{updatedUser.Phone}</UserPhone>
        <ViewMore onClick={openModal}>
          <i className="bi bi-door-closed-fill me-1"></i>All Details
        </ViewMore>
      </UserCardWrapper>
      <UserModel user={updatedUser} isOpen={isModalOpen} onClose={closeModal} />
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
    }),
  ]).isRequired,
};

export default UserCard;
