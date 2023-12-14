import styled from "styled-components";

export const Oveylay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.69);
  backdrop-filter: blur(2px);
  z-index: 1000;
`;

export const StyledUserModel = styled.div`
  position: fixed;
  height: 500px;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e3e7f2;
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
    background-color: #e3e7f2;
    border-bottom: 1px solid silver;

    @media (width >= 320px) and (width <= 425px) {
      padding: 20px 0 35px 0;
    }

    h3 {
      margin: 0;
      font-weight: 600;
      color: #f5b900;

      @media (width >= 320px) and (width <= 425px) {
        font-size: 23px;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

export const CloseButton = styled.button`
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

export const EditButton = styled.button`
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

export const DiscardButton = styled.button`
  outline: unset;
  border: unset;
  border-radius: 3px;
  background-color: #eb4474;
  color: #fafafa;
  z-index: 1000;
  padding: 5px 10px;
  transition: all 0.3s ease;
  letter-spacing: 0.7px;

  &:hover,
  &:focus {
    background-color: #eb5144;
    transform: translateX(3px);
  }
`;

export const SaveButton = styled.button`
  position: relative;
  width: 100%;
  outline: unset;
  border: unset;
  border-radius: 3px;
  background-color: #ffcb2e;
  color: #fafafa;
  z-index: 1000;
  padding: 5px 0;
  transition: all 0.3s ease;
  letter-spacing: 0.7px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    background-color: #ffac34;
    transform: scale(1.03);
  }
`;

export const ViewDetails = styled.div`
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

export const ViewUserPhoto = styled.div`
  width: 230px;
  height: auto;
  // padding: 10px;
  border-radius: 7px;
  border: 1px solid silver;
  overflow: hidden;
  position: absolute;
  top: 10px;
  right: 10px;

  img {
    width: 100%;
    transition: all 0.4s ease;

    &:hover {
      transform: scale(1.05);
    }
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

export const DetailsSpan = styled.span`
  font-size: 17px;
  letter-spacing: 1px;
  margin: 5px 0;
  text-align: justify;

  @media (width >= 320px) and (width <= 425px) {
    font-size: 14px;
    text-align: left;
  }

  strong {
    color: #a52a2a;
    letter-spacing: 0.7px;
    // color: #4689f3;
  }
`;

export const EditUSerDetails = styled.form`
  width: 100%;
  height: auto;
  padding: 10px;
  margin-top: 17px;
  border: 1px solid silver;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .preview-holder {
    margin-top: 20px;
    overflow: hidden;
    width: auto;
    height: 320px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const FieldsHolder = styled.div`
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

export const InputHolder = styled.div`
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
    letter-spacing: 1px;
    font-weight: 500;
    color: #a52a2a;
  }

  input,
  textarea {
    width: 100%;
    outline: unset;
    padding: 5px;
    border: 1px solid #141414a1;
    transition: all 0.2s ease;
    font-size: 17px;
    letter-spacing: 0.7px;
    box-shadow: 2px 2px 0 #141414;
    font-weight: 500;

    @media (width >= 320px) and (width <= 1242px) {
      width: 100%;
    }

    &:focus {
      transform: translateX(3px) translateY(3px);
      border: 1px solid #141414;
      box-shadow: 0 0 0;
    }
  }

  input::file-selector-button {
    background-color: transparent;
    outline: unset;
    border: 1px solid #141414;
    border-radius: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;

    &:hover {
      background-color: #141414;
      color: white;
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
