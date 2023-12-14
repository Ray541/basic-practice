// import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import LoaderComponent from "../Loader/LoaderComponent";
import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  Oveylay,
  StyledUserModel,
  CloseButton,
  EditButton,
  DiscardButton,
  SaveButton,
  ViewDetails,
  ViewUserPhoto,
  DetailsSpan,
  EditUSerDetails,
  FieldsHolder,
  InputHolder,
} from "./UserModal.styled";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  getFirestore,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storeImage } from "../../firebaseConfig";
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

function UserModal({ isOpen, onClose, user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setUserData(user);
      setFormData({
        name: user.Name,
        fathersname: user.FathersName,
        mothersname: user.MothersName,
        gotra: user.Gotra,
        nakshatra: user.Nakshatra,
        rashi: user.Rashi,
        gana: user.Gana,
        nadi: user.Nadi,
        madhwasmartha: user.MadhwaSmartha,
        matha: user.Matha,
        datetimebirth: user.DateTimeBirth,
        placebirth: user.PlaceBirth,
        height: user.Height,
        qualification: user.Qualification,
        workingorg: user.WorkingOrg,
        placework: user.PlaceWork,
        salary: user.Salary,
        siblings: user.Siblings,
        phone: user.Phone,
        expectations: user.Expectations,
        address: user.Address,
      });
    }
  }, [user]);

  const handelCloseClick = () => {
    setPreview(null);
    setIsEditing(false);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelEditClick = () => {
    setIsEditing(true);
  };

  const fileInputRef = useRef(null);

  const handleCancelClick = () => {
    setIsEditing(false);
    setPreview(null);
  };

  /**Stores the user entered data */
  const [userData, setUserData] = useState(user);

  const handleSaveClick = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const updatedData = {
      Name: formData.name || "",
      FathersName: formData.fathersname || "",
      MothersName: formData.mothersname || "",
      Gotra: formData.gotra || "",
      Nakshatra: formData.nakshatra || "",
      Rashi: formData.rashi || "",
      Gana: formData.gana || "",
      Nadi: formData.nadi || "",
      MadhwaSmartha: formData.madhwasmartha || "",
      Matha: formData.matha || "",
      DateTimeBirth: formData.datetimebirth || "",
      PlaceBirth: formData.placebirth || "",
      Height: formData.height || "",
      Qualification: formData.qualification || "",
      WorkingOrg: formData.workingorg || "",
      PlaceWork: formData.placework || "",
      Salary: formData.salary || "",
      Siblings: formData.siblings || "",
      Phone: formData.phone || user.Phone,
      Expectations: formData.expectations || "",
      Address: formData.address || "",
      Photo: formData.photo || user.Photo,
    };

    try {
      if (formData.photo) {
        const blob = await createWatermarkedBlob(fileInputRef.current.files[0]);

        /**If a new photo is uploaded, update the storage */
        const storageRef = ref(
          storeImage,
          `images/${formData.name}UpdatedImage.jpg`
        );
        await uploadBytes(storageRef, blob);
        updatedData.Photo = await getDownloadURL(storageRef); //get downloadURL for the image to store it
      }
      await updateUserInFirestore(formData.phone || user.Phone, updatedData);
      setUserData({ ...userData, ...updatedData });
      setIsLoading(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  /**Function to add the watermark to the uploaded image
   * @param ,uploadedImage
   * @returns Uploaded Image with Watermark
   */
  const createWatermarkedBlob = (uploadedImage) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(uploadedImage);

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Set canvas dimensions which matches the image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0);

        // Add watermark
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Antstack", canvas.width - 120, canvas.height - 20);

        // Convert the canvas to a blob
        canvas.toBlob((blob) => {
          resolve(blob);
        }, "image/*");
      };
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    fathersname: "",
    mothersname: "",
    gotra: "",
    nakshatra: "",
    rashi: "",
    gana: "",
    nadi: "",
    madhwasmartha: "",
    matha: "",
    datetimebirth: "",
    placebirth: "",
    height: "",
    qualification: "",
    workingorg: "",
    placework: "",
    salary: "",
    siblings: "",
    phone: "",
    expectations: "",
    address: "",
    photo: null,
  });

  /**Function to update the data in the Firebase Storage
   * @param ,identifier, updateData
   * @return updated a perticular user in firebase database
   */
  const updateUserInFirestore = async (identifier, updatedData) => {
    try {
      const usersRef = collection(firestore, "userInfo");
      const q = query(usersRef, where("Phone", "==", identifier));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        await updateDoc(doc(firestore, "userInfo", userDoc.id), updatedData);
        // setUserData({ ...userData, ...updatedData });
        // alert("User data updated successfully");
        Swal.fire({
          title: "Success!",
          text: "User Data Updated Successfully",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          setIsEditing(false);
        });
      } else {
        // console.log("User not found.");
        Swal.fire({
          title: "Error!",
          text: "User not found",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      Swal.fire({
        title: "Error!",
        text: `Error updating user data: ${error}`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handelFileChange = async (e) => {
    const uploadedImage = e.target.files[0];

    if (uploadedImage) {
      const watermarkedBlob = await createWatermarkedBlob(uploadedImage);

      const img = new Image();
      img.src = URL.createObjectURL(watermarkedBlob);

      img.onload = () => {
        setPreview(img.src); // Set the preview URL
        setFormData({ ...formData, photo: watermarkedBlob });
      };
    } else {
      setPreview(null);
      setFormData({ ...formData, photo: null });
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <Oveylay $isOpen={isOpen} />
      <StyledUserModel className="col-lg-8 col-md-7 col-sm-7 col-11">
        <div className="popup-top">
          <CloseButton onClick={handelCloseClick}>
            <i className="bi bi-door-open-fill me-1"></i>Back
          </CloseButton>
          {isEditing ? <h3>Edit User Details</h3> : <h3>User Details</h3>}
          {isEditing ? (
            <>
              <DiscardButton onClick={handleCancelClick}>
                Cancel<i className="bi bi-x-circle ms-1"></i>
              </DiscardButton>
            </>
          ) : (
            <EditButton onClick={handelEditClick}>
              Edit<i className="bi bi-pencil-fill ms-1"></i>
            </EditButton>
          )}
        </div>
        {isEditing ? (
          <EditUSerDetails onSubmit={handleSaveClick}>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={formData.name || user.Name}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="fathersname">Father&apos;s Name:</label>
                <input
                  type="text"
                  name="fathersname"
                  defaultValue={formData.fathersname || user.FathersName}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="mothersname">Mother&apos;s Name:</label>
                <input
                  type="text"
                  name="mothersname"
                  defaultValue={formData.mothersname || user.MothersName}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="gotra">Gotra</label>
                <input
                  type="text"
                  name="gotra"
                  defaultValue={formData.gotra || user.Gotra}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="nakshatra">Nakshatra:</label>
                <input
                  type="text"
                  name="nakshatra"
                  defaultValue={formData.nakshatra || user.Nakshatra}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="rashi">Rashi</label>
                <input
                  type="text"
                  name="rashi"
                  defaultValue={formData.rashi || user.Rashi}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="gana">Gana:</label>
                <input
                  type="text"
                  name="gana"
                  defaultValue={formData.gana || user.Gana}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="nadi">Nadi.:</label>
                <input
                  type="text"
                  name="nadi"
                  defaultValue={formData.nadi || user.Nadi}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="madhwasmartha">Madhwa/ Smartha:</label>
                <input
                  type="text"
                  name="madhwasmartha"
                  defaultValue={formData.madhwasmartha || user.MadhwaSmartha}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="matha">Matha.:</label>
                <input
                  type="text"
                  name="matha"
                  defaultValue={formData.matha || user.Matha}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="datetimebirth">Date & Time of Birth:</label>
                <input
                  type="text"
                  name="datetimebirth"
                  defaultValue={formData.datetimebirth || user.DateTimeBirth}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="placebirth">Place of Birth:</label>
                <input
                  type="text"
                  name="placebirth"
                  defaultValue={formData.placebirth || user.PlaceBirth}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="height">Height:</label>
                <input
                  type="text"
                  name="height"
                  defaultValue={formData.height || user.Height}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="qualification">Qualification:</label>
                <input
                  type="text"
                  name="qualification"
                  defaultValue={formData.qualification || user.Qualification}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="workingorg">Working Organisation:</label>
                <input
                  type="text"
                  name="workingorg"
                  defaultValue={formData.workingorg || user.WorkingOrg}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="placework">Place of Working:</label>
                <input
                  type="text"
                  name="placework"
                  defaultValue={formData.placework || user.PlaceWork}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="salary">Salary Per Annum:</label>
                <input
                  type="text"
                  name="salary"
                  defaultValue={formData.salary || user.Salary}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="siblings">Siblings:</label>
                <input
                  type="text"
                  name="siblings"
                  defaultValue={formData.siblings || user.Siblings}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="phone">What&apos;s App Number:</label>
                <input
                  type="text"
                  name="phone"
                  defaultValue={formData.phone || user.Phone}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="photo">Upload Photo:</label>
                <input
                  type="file"
                  id="photo"
                  ref={fileInputRef}
                  name="photo"
                  autoComplete="off"
                  onChange={handelFileChange}
                />
              </InputHolder>
            </FieldsHolder>
            {preview !== null && (
              <FieldsHolder>
                <div className="preview-holder">
                  {preview && <img src={preview} alt="Preview" />}
                </div>
              </FieldsHolder>
            )}
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="expectations">
                  Expectations about Groom/Bride:
                </label>
                <textarea
                  name="expectations"
                  id="expectations"
                  defaultValue={formData.expectations || user.Expectations}
                  autoComplete="off"
                  onChange={handleChange}
                ></textarea>
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="address">Address:</label>
                <textarea
                  name="address"
                  id="address"
                  defaultValue={formData.address || user.Address}
                  autoComplete="off"
                  onChange={handleChange}
                ></textarea>
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-3">
                <SaveButton type="submit">
                  {isLoading && <LoaderComponent />}
                  Save Changes<i className="bi bi-check2-square ms-1"></i>
                </SaveButton>
              </InputHolder>
            </FieldsHolder>
          </EditUSerDetails>
        ) : (
          <ViewDetails>
            <ViewUserPhoto>
              <img src={userData.Photo} />
            </ViewUserPhoto>
            <DetailsSpan>
              <strong>Name: </strong>
              {userData.Name}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Father&apos;s Name: </strong>
              {userData.FathersName}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Mother&apos;s Name: </strong>
              {userData.MothersName}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Gotra: </strong>
              {userData.Gotra}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Nakshatra: </strong>
              {userData.Nakshatra}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Rashi: </strong>
              {userData.Rashi}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Gana: </strong>
              {userData.Gana}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Nadi.: </strong>
              {userData.Nadi}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Madhwa/ Smartha: </strong>
              {userData.MadhwaSmartha}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Matha.: </strong>
              {userData.Matha}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Date & Time of Birth: </strong>
              {userData.DateTimeBirth}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Place of Birth: </strong>
              {userData.PlaceBirth}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Height: </strong>
              {userData.Height}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Qualification: </strong>
              {userData.Qualification}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Working Organisation: </strong>
              {userData.WorkingOrg}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Place of Working: </strong>
              {userData.PlaceWork}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Salary Per Annum: </strong>
              {userData.Salary}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Siblings: </strong>
              {userData.Siblings}
            </DetailsSpan>
            <DetailsSpan>
              <strong>What&apos;s App Number: </strong>
              {userData.Phone}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Expectations about Groom/Bride: </strong>
              {userData.Expectations}
            </DetailsSpan>
            <DetailsSpan>
              <strong>Address: </strong>
              {userData.Address}
            </DetailsSpan>
          </ViewDetails>
        )}
      </StyledUserModel>
    </>
  );
}

UserModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  user: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({
      Name: PropTypes.string,
      FathersName: PropTypes.string,
      MothersName: PropTypes.string,
      Gotra: PropTypes.string,
      Nakshatra: PropTypes.string,
      Rashi: PropTypes.string,
      Gana: PropTypes.string,
      Nadi: PropTypes.string,
      MadhwaSmartha: PropTypes.string,
      Matha: PropTypes.string,
      DateTimeBirth: PropTypes.string,
      PlaceBirth: PropTypes.string,
      Height: PropTypes.string,
      Qualification: PropTypes.string,
      WorkingOrg: PropTypes.string,
      PlaceWork: PropTypes.string,
      Salary: PropTypes.string,
      Siblings: PropTypes.string,
      Phone: PropTypes.string,
      Expectations: PropTypes.string,
      Address: PropTypes.string,
      Photo: PropTypes.string,
    }),
  ]).isRequired,
};

export default UserModal;
