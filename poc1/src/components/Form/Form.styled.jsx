import styled from "styled-components";

export const FormSection = styled.section`
  width: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffe1a8a6; //#ffe1a8
  padding: 30px 0;

  .logo-left,
  .logo-right {
    width: 75px;
    margin-right: 15px;
  }

  .logo-left {
    @media (width >= 320px) and (width <= 425px) {
      width: 50px;
      margin: 0;
    }
  }

  .logo-right {
    transform: scaleX(-1);
    margin-left: 15px;

    @media (width >= 320px) and (width <= 768px) {
      display: none;
    }
  }
`;

export const StyledForm = styled.form`
  max-width: 601px;
  height: auto;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ebfbffe6;
  // border: 1px solid silver;
  border-radius: 10px;
  box-shadow: 0 3px 5px silver;

  @media (width > 768px) {
    padding: 30px 100px;
  }

  @media (width > 425px) and (width <= 768px) {
    padding: 30px 85px;
  }
  @media (width > 319px) and (width <= 425px) {
    padding: 20px 10px;
  }

  .required-span {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 15px;
    color: #ff6447;
    text-transform: capitalize;
    letter-spacing: 0.5px;
  }

  h1 {
    font-weight: 600;
    font-size: 39px;
    letter-spacing: 0.7px;
    margin: 0;
    text-align: center;
    text-transform: capitalize;

    @media (width > 425px) and (width <= 768px) {
      font-size: 30px;
      font-weight: 500;
    }
    @media (width > 319px) and (width <= 425px) {
      font-size: 33px;
      font-weight: 500;
    }
  }

  .two {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    @media (width >319px) and (width <= 425px) {
      display: block;
    }
    @media (width >425px) and (width <= 581px) {
      display: block;
    }
  }

  .last-input-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .water-mark {
      position: absolute;
      bottom: 10px;
      right: 20px;
      font-size: 20px;
      color: whitesmoke;
      text-shadow: 0 0 7px black;
      font-weight: 900;
    }
  }

  .input-holder {
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    label {
      width: 100%;
      font-size: 17px;
      font-weight: 400;
      letter-spacing: 1px;

      @media (width >= 320px) and (width <= 425px) {
        font-size: 15px;
      }
    }

    input {
      width: 100%;
      padding: 3px 5px;
      background-color: transparent;
      outline: unset;
      border-radius: 1px;
      border: 1px solid #141414;

      &:focus {
        background-color: #dbf9ff;
        border: 1px solid #0b95ea;
        box-shadow: 0px 0px 2px black;
      }
    }

    .error-message {
      color: red;
      margin-left: 10px;
      font-size: 17px;
      letter-spacing: 1.5px;
      font-weight: 700;
    }

    .address-input {
      resize: unset;
      height: 120px;
      padding: 3px 5px;
      outline: unset;
      background-color: transparent;
      border-radius: 1px;
      border: 1px solid #141414;

      &:focus,
      &:active {
        background-color: #dbf9ff;
        border: 1px solid #0b95ea;
        box-shadow: 0px 0px 2px black;
      }
    }

    input::file-selector-button {
      background-color: #ebfbff;
      outline: unset;
      border: 1px solid #0b95ea;
      border-radius: 1px;
      cursor: pointer;
      transition: all 0.3s ease;
      letter-spacing: 0.5px;

      &:hover {
        background-color: #0b95ea;
        color: white;
      }
    }

    .preview-holder {
      margin-top: 20px;
      overflow: hidden;
      width: 90%;

      img {
        width: 100%;
      }
    }
  }

  .button-holder {
    margin-top: 10px;
    display: flex;
    aign-items: center;
    justify-content: center;
  }

  #submit {
    width: 160px;
    padding: 3px 50px;
    font-size: 1rem;
    background-color: #0b95ea;
    outline: unset;
    border: unset;
    border-radius: 5px;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    color: #f1fff1;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;
