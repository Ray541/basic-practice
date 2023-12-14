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
  ActionButtons,
  ViewMore,
  DeleteUser,
} from "./UserCard.styled";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { deleteObject, getStorage, ref } from "firebase/storage";
import {
  onSnapshot,
  query,
  where,
  collection,
  getFirestore,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import Swal from "sweetalert2";

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

  /**Function for Opening the Modal */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /**Function for Closing the Modal */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  /**Function for DeleteUser from Firestore */
  const deleteUser = async () => {
    try {
      const userRef = collection(firestore, "userInfo");

      // Create a query to get the document with the Phone number as the unique identifier
      const q = query(userRef, where("Phone", "==", user.Phone));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(async (doc) => {
        // Delete the user document from the firebase firestore
        await deleteDoc(doc.ref);

        const storeImage = getStorage(app);
        // Delete the first user image from Firebase Storage
        const userImageRef = ref(storeImage, `images/${user.Name}.jpg`);
        // Delete the updated user image from Firebase Storage
        const UpdateduserImageRef = ref(
          storeImage,
          `images/${user.Name}UpdatedImage.jpg`
        );
        await deleteObject(userImageRef);
        await deleteObject(UpdateduserImageRef);
      });
      // alert("User Deleted Successfully.");
      Swal.fire({
        title: "Success!",
        text: "User Deleted Successfully",
        icon: "success",
        confirmButtonText: "OK",
      })
    } catch (error) {
      // alert("Error deleting the user: ", error);
      Swal.fire({
        title: "Error!",
        text: `Error deleting the user: ${error}`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
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
        <ActionButtons>
          <ViewMore onClick={openModal}>
            <i className="bi bi-door-closed-fill me-1"></i>All Details
          </ViewMore>
          <DeleteUser onClick={deleteUser}>
            <i className="bi bi-trash2-fill me-1"></i>Delete User
          </DeleteUser>
        </ActionButtons>
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
