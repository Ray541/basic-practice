// import React from "react";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import PropTypes from "prop-types";

const Oveylay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.69);
  backdrop-filter: blur(2px);
  z-index: 1000;
`;

const StyledUserModel = styled.div`
  position: fixed;
  height: 500px;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 0 20px 20px 20px;
  border-radius: 10px;
  z-index: 1000;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #eee;
    border-radius: 6px;
  }

  @media (width >= 320px) and (width <= 425px) {
    height: 425px;
  }

  .popup-top {
    position: sticky;
    top: 0;
    z-index: 55;
    padding: 20px 0 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-bottom: 1px solid silver;

    @media (width >= 320px) and (width <= 425px) {
      padding: 20px 0 35px 0;
    }

    h3 {
      margin: 0;

      @media (width >= 320px) and (width <= 425px) {
        font-size: 23px;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

const CloseButton = styled.button`
  outline: unset;
  border: unset;
  border-radius: 3px;
  background-color: #4689f3;
  color: #fafafa;
  z-index: 1000;
  padding: 5px 10px;
  transition: all 0.3s ease;
  letter-spacing: 0.7px;

  &:hover,
  &:focus {
    background-color: #f34655;
    transform: translateX(-3px);
  }
`;

const EditButton = styled.button`
  outline: unset;
  border: unset;
  border-radius: 3px;
  background-color: #6fae63;
  color: #fafafa;
  z-index: 1000;
  padding: 5px 10px;
  transition: all 0.3s ease;
  letter-spacing: 0.7px;

  &:hover,
  &:focus {
    background-color: #37954a;
    transform: translateX(3px);
  }
`;

const SaveButton = styled.button`
    outline: unset;
    border: unset;
    border-radius: 3px;
    background-color: #ffcb2e;M
    color: #fafafa;
    z-index: 1000;
    padding: 5px 10px;
    transition: all 0.3s ease;
    letter-spacing: 0.7px;

    &:hover,
    &:focus {
      background-color: #FA960F;
      transform: translateX(3px);
    }
  `;

const ViewDetails = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 17px;
  border: 1px solid silver;
  padding: 10px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media (width >= 320px) and (width <= 425px) {
    padding: 13px;
  }
`;

const ViewUserPhoto = styled.div`
  width: 230px;
  height: auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid silver;
  position: absolute;
  top: 10px;
  right: 10px;

  img {
    width: 100%;
  }

  @media (width >= 320px) and (width <= 768px) {
    width: 100%;
    padding: 0;
    top: 0;
    left: 0;
    margin-bottom: 10px;
    display: block;
    position: relative;
    display: grid;
    place-items: center;

    img {
      width: 100%;
    }
  }

  @media (width > 768px) and (width <= 1024px) {
    width: 60%;
    padding: 0;
    top: 0;
    left: 0;
    margin-bottom: 10px;
    display: block;
    position: relative;
    display: grid;
    place-items: center;

    img {
      width: 100%;
    }
  }
`;

const DetailsSpan = styled.span`
  font-size: 17px;
  letter-spacing: 0.7px;
  margin: 5px 0;
  text-align: justify;

  @media (width >= 320px) and (width <= 425px) {
    font-size: 14px;
    text-align: left;
  }
`;

const EditUSerDetails = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  margin-top: 17px;
  border: 1px solid silver;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FieldsHolder = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 7px 0;

  @media (width >= 320px) and (width <= 1242px) {
    display: block;
    margin: 5px 0;
  }
`;

const InputHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px;

  @media (width >= 320px) and (width <= 1242px) {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
  }

  label {
    font-size: 17px;
  }

  input,
  textarea {
    width: 100%;
    outline: unset;
    padding: 5px;
    border: 1px solid #4689f3;
    transition: all 0.2s ease;
    letter-spacing: 0.7px;
    font-weight: 500;

    @media (width >= 320px) and (width <= 1242px) {
      width: 100%;
    }

    &:focus {
      color: #f1f1f1;
      background-color: #4689f3a1;
    }
  }

  textarea {
    resize: none;
    height: 100px;
  }

  .edit-save-button {
    background-color: #4689f3;
    color: #f7fff7;
    border-radius: 7px;

    &:hover,
    &:focus {
      transform: scale(0.95);
    }
  }
`;

function UserModel({ isOpen, onClose }) {
  const [isEditing, setIsEditing] = useState(false);

  const handelEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Now I have to add the logic for saving the data here
    setIsEditing(false);
  };

  const handelCloseClick = () => {
    setIsEditing(false);
    onClose();
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
            <i className="bi bi-door-open-fill me-1"></i>Close
          </CloseButton>
          {isEditing ? <h3>Edit User Details</h3> : <h3>User Details</h3>}
          {isEditing ? (
            <SaveButton onClick={handleSaveClick}>
              Save<i className="bi bi-check2-square ms-1"></i>
            </SaveButton>
          ) : (
            <EditButton onClick={handelEditClick}>
              Edit<i className="bi bi-pencil-fill ms-1"></i>
            </EditButton>
          )}
        </div>
        {isEditing ? (
          <EditUSerDetails method="post">
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" autoComplete="off" />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="fathersname">Father&apos;s Name:</label>
                <input type="text" name="fathersname" autoComplete="off" />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="mothersname">Mother&apos;s Name:</label>
                <input type="text" name="mothersname" autoComplete="off" />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="gotra">Gotra</label>
                <input type="text" name="gotra" autoComplete="off" />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="nakshatra">Nakshatra:</label>
                <input type="text" name="nakshatra" autoComplete="off" />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="rashi">Rashi</label>
                <input type="text" name="rashi" autoComplete="off" />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="gana">Gana:</label>
                <input type="text" name="gana" autoComplete="off" />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="nadi">Nadi.:</label>
                <input type="text" name="nadi" autoComplete="off" />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="madhwasmartha">Madhwa/ Smartha:</label>
                <input type="text" name="madhwasmartha" autoComplete="off" />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="matha">Matha.:</label>
                <input type="text" name="matha" autoComplete="off" />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="datetimebirth">Date & Time of Birth:</label>
                <input type="text" name="datetimebirth" autoComplete="off" />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="placebirth">Place of Birth:</label>
                <input type="text" name="placebirth" autoComplete="off" />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="height">Height:</label>
                <input type="text" name="height" autoComplete="off" />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="qualification">Qualification:</label>
                <input type="text" name="qualification" autoComplete="off" />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="workingorg">Working Organisation:</label>
                <input type="text" name="workingorg" autoComplete="off" />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="placework">Place of Working:</label>
                <input type="text" name="placework" autoComplete="off" />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="salary">Salary Per Annum:</label>
                <input type="text" name="salary" autoComplete="off" />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="siblings">Siblings:</label>
                <input type="text" name="siblings" autoComplete="off" />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="phone">Contact No.:</label>
                <input type="text" name="phone" autoComplete="off" />
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="siblings">Siblings:</label>
                <input type="text" name="siblings" autoComplete="off" />
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="edit-expectations">
                  Expectations about Groom/Bride:
                </label>
                <textarea
                  name="edit-expectations"
                  id="edit-expectations"
                  autoComplete="off"
                ></textarea>
              </InputHolder>
              <InputHolder className="input-holder mb-2 col-lg-5">
                <label htmlFor="edit-address">Address:</label>
                <textarea
                  name="edit-address"
                  id="edit-address"
                  autoComplete="off"
                ></textarea>
              </InputHolder>
            </FieldsHolder>
            <FieldsHolder>
              <InputHolder className="input-holder mb-2 col-lg-3">
                <input
                  className="edit-save-button"
                  type="submit"
                  value="Save"
                />
              </InputHolder>
            </FieldsHolder>
          </EditUSerDetails>
        ) : (
          <ViewDetails>
            <ViewUserPhoto>
              <img src="./src/assets/react.svg" />
            </ViewUserPhoto>
            <DetailsSpan>
              <strong>Name: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Father&apos;s Name: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Mother&apos;s Name: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Gotra: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Nakshatra: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Rashi: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Gana: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Nadi.: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Madhwa/ Smartha: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Matha.: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Date & Time of Birth: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Place of Birth: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Height: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Qualification: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Working Organisation: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Place of Working: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Salary Per Annum: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Siblings: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Contact No.: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Expectations about Groom/Bride: </strong>
            </DetailsSpan>
            <DetailsSpan>
              <strong>Address: </strong>
            </DetailsSpan>
          </ViewDetails>
        )}
      </StyledUserModel>
    </>
  );
}

UserModel.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default UserModel;
