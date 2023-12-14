import styled from "styled-components";

export const FormSection = styled.section`
  width: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
  padding: 30px 0;

  .logo-left,
  .logo-right {
    width: 75px;
    margin-right: 15px;
  }

  h1 {
    letter-spacing: 0.5 px;
    font-size: 50px;
    font-weight: 600;
    color: #141414;

    @media (width >= 320px) and (width <= 425px) {
      font-size: 40px;
    }
  }

  .logo-left {
    @media (width >= 320px) and (width <= 425px) {
      width: 50px;
      margin-right: 10px;
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
  // max-width: 700px;
  width: 90%;
  height: auto;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f5f5f5; //#ebfbffe6
  border-radius: 1px;
  border: 2px solid #141414;
  box-shadow: 5px 5px 0px black;

  @media (width > 768px) {
    padding: 30px 100px;
  }

  @media (width > 425px) and (width <= 768px) {
    padding: 30px 10px;
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
    color: #333230;

    @media (width > 425px) and (width <= 768px) {
      font-size: 33px;
      font-weight: 500;
    }
    @media (width > 319px) and (width <= 425px) {
      font-size: 27px;
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
      flex-wrap: wrap;
    }
    @media (width >425px) and (width <= 768px) {
      display: flex;
      flex-wrap: wrap;
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
      font-size: 19px;
      font-weight: 500;
      color: #964b00;
      letter-spacing: 0.7px;

      @media (width >= 320px) and (width <= 425px) {
        font-size: 15px;
      }

      @media (width >= 426px) and (width <= 768px) {
        font-size: 17px;
      }
    }

    input {
      width: 100%;
      padding: 6px;
      background-color: transparent;
      outline: unset;
      border-radius: 1px;
      border: 1px solid #141414;
      box-shadow: 3px 3px 0 #141414;
      font-weight: 400;
      color: #141414;
      letter-spacing: 1px;
      transition: all 0.1s ease;

      &:focus {
        transform: translateX(2px) translateY(2px);
        border: 1px solid #141414;
        box-shadow: 0 0 0 #0b95ea;
      }
    }

    .error-message {
      color: red;
      margin-left: 10px;
      font-size: 17px;
      letter-spacing: 1.5px;
      font-weight: 700;
    }

    textarea {
      resize: unset;
      height: 80px;
      padding: 3px 5px;
      outline: unset;
      background-color: transparent;
      border-radius: 1px;
      border: 1px solid #141414;
      box-shadow: 3px 3px 0 #141414;
      color: #141414;
      letter-spacing: 1px;
      transition: all 0.2s ease;

      &:focus,
      &:active {
        transform: translateX(3px) translateY(3px);
        border: 1px solid #141414;
        box-shadow: 0 0 0 #141414;
      }
    }

    .expectations {
      height: 120px;
    }

    input::file-selector-button {
      background-color: transparent;
      margin: 5px;
      outline: unset;
      border: 1px solid #141414;
      border-radius: 1px;
      cursor: pointer;
      transition: all 0.25s ease;
      letter-spacing: 0.5px;

      &:hover {
        background-color: #141414;
        color: white;
      }
    }

    .preview-holder {
      margin-top: 20px;
      overflow: hidden;
      width: 30%;

      img {
        width: 100%;
      }
    }
  }

  .button-holder {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #submit {
    width: 230px;
    padding: 3px 50px;
    font-size: 1rem;
    background-color: transparent;
    border: 2px solid #141414;
    box-shadow: 3px 3px 0 #141414;
    outline: unset;
    border-radius: 1px;
    letter-spacing: 1px;
    transition: all 0.1s ease;
    color: #141414;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (width >= 320px) and (width <= 425px) {
      width: 185px;
    }

    &:hover,
    &:focus {
      transform: translateX(3px) translateY(3px);
      box-shadow: 0 0 0 #141414;
    }
  }
`;
