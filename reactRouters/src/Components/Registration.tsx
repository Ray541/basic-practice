import React from 'react'
import styled from 'styled-components'
import { StyledButton } from './Button'
import { useFormik } from 'formik'
import { registrationSchema } from './RegistrationSchema'

const Registration = () => {

  const initialValue = {
    name: '',
    email: '',
    username: '',
    password: '',
    cpassword: '',
  }

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValue,
    validationSchema: registrationSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    }
  })



  return (
    <>
    <h1 style={{width: "100%", paddingTop: "50px", textAlign: "center"}}>Registration Form</h1>
      <StyledRegisterationForm onSubmit={handleSubmit}>
        <InputDivs>
          <input type="text" id='name' name='name' autoComplete='off' value={values.name} onBlur={handleBlur} onChange={handleChange} />
          <label htmlFor="name">Name</label>
          {errors.name && touched.name && <p style={{ color: "red", marginTop: "5px" }}>{errors.name}</p>}
        </InputDivs>
        <InputDivs>
          <input type="email" id='email' name='email' autoComplete='off' value={values.email} onBlur={handleBlur} onChange={handleChange} />
          <label htmlFor="email">Email</label>
          {errors.email && touched.email && <p style={{ color: "red", marginTop: "5px" }}>{errors.email}</p>}
        </InputDivs>
        <InputDivs>
          <input type="text" id='username' name='username' autoComplete='off' value={values.username} onBlur={handleBlur} onChange={handleChange} />
          <label htmlFor="username">Username</label>
          {errors.username && touched.username && <p style={{ color: "red", marginTop: "5px" }}>{errors.username}</p>}
        </InputDivs>
        <InputDivs>
          <input type="text" id='password' name='password' autoComplete='off' value={values.password} onBlur={handleBlur} onChange={handleChange} />
          <label htmlFor="password">Password</label>
          {errors.password && touched.password && <p style={{ color: "red", marginTop: "5px" }}>{errors.password}</p>}
        </InputDivs>
        <InputDivs>
          <input type="text" id='cpassword' name='cpassword' autoComplete='off' value={values.cpassword} onBlur={handleBlur} onChange={handleChange} />
          <label htmlFor="cpassword">Confirm Password</label>
          {errors.cpassword && touched.cpassword && <p style={{ color: "red", marginTop: "5px" }}>{errors.cpassword}</p>}
        </InputDivs>
        <InputDivs>
          <StyledButton type='submit' id='form-sumbit-button'>
            Submit
          </StyledButton>
        </InputDivs>
      </StyledRegisterationForm>
    </>
  )
}

export default Registration

const StyledRegisterationForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 75vh;
`;

const InputDivs = styled.div`
  position: relative;
  margin: 10px 0 20px 0;

  label {
    position: absolute;
    padding: 0px 5px;
    top: -10px;
    left: 10px;
    font-size: 15px;
    background-color: #fff;
  }
  
  input{
    width: 300px;
    display: block;
    padding: 10px; 
    outline: none;
    border-radius: 5px;
    border: 1px solid black;
    
    &:focus
    {
      border: 1px solid blue;
      color: black;
    }

    &:focus + label
    {
      color: blue;
    }
  }

  #form-sumbit-button
  {
    cursor: pointer;
    width: 200px;
    font-size: 15px;
    box-shadow: 4px 4px 0 blue;
    transition: all .3s ease;
    font-weight: 600;
    
    &:focus,
    &:hover
    {
      color: blue;
      transform: translateX(4px) translateY(4px);
      box-shadow: 0px 0px 0px black;
    }
  }
`;