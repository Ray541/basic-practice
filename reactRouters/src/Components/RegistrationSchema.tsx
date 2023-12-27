import * as Yup from "yup"

export const registrationSchema = Yup.object({
    name: Yup.string().min(3, "Name must be Atleast 3 Characters").required("Name is Required"),
    email: Yup.string().email("Email should be Valid").required("Email is Required"),
    username: Yup.string().min(3, "Username must be Atleast 3 Characters").max(10, "Username must be Only 10 Charaters").required("Username is Required"),
    password: Yup.string().min(7, "Password must be Atleast 7 Characters").required("Password is Required"),
    cpassword: Yup.string().oneOf([Yup.ref("password")], "Password does not Match!").required("Confirm Password is Required"),
})