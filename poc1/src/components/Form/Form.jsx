import { useState, useRef } from "react";
import { storeText, storeImage } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import axios from "axios";
import { FormSection, StyledForm } from "./Form.styled";
import "bootstrap/dist/css/bootstrap.css";

function Form() {
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

  const [preview, setPreview] = useState(null);
  const fileRef = useRef(null);

  // Validation Start
  const [error, setError] = useState({
    name: false,
    phone: false,
    photo: false,
  });

  const validName = (name) => {
    const nameRegx = /^[a-zA-Z]$/;
    return nameRegx.test(name);
  };

  const validPhoneNumber = (phone) => {
    const phoneRegx = /^\d{10}$/;
    return phoneRegx.test(phone);
  };
  // Validation End

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelFileChange = (e) => {
    const uploadedImage = e.target.files[0];

    if (uploadedImage) {
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
          const watermarkedImage = new FormData();
          watermarkedImage.append("photo", blob, "watermarked_image.jpg");

          setFormData({ ...formData, photo: watermarkedImage.get("photo") });
          setPreview(URL.createObjectURL(blob));
        }, "image/*");
      };
    }
  };

  const dbref = collection(storeText, "userInfo");
  const storageRef = ref(
    storeImage,
    `images/${formData.name}_${Date.now()}.jpg`
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newError = {
      name:
        formData.name === "" ||
        (!validName(formData.name) && validName(formData.name)),
      phone:
        formData.phone === "" ||
        (!validPhoneNumber(formData.phone) && validPhoneNumber(formData.phone)),
      photo: formData.photo === null,
    };

    setError(newError);

    // const data = {
    //   Name: formData.name,
    //   FathersName: formData.fathersName,
    //   MothersName: formData.mothersName,
    //   Gotra: formData.gotra,
    //   Nakshatra: formData.nakshatra,
    //   Gana: formData.gana,
    //   Nadi: formData.nadi,
    //   MadhwaSmartha: formData.madhwaSmartha,
    //   Matha: formData.matha,
    //   DateTimeBirth: formData.dateTimeBirth,
    //   PlaceBirth: formData.placeBirth,
    //   Height: formData.height,
    //   Qualification: formData.qualification,
    //   WorkingOrg: formData.workingOrg,
    //   PlaceWork: formData.placeWork,
    //   Salary: formData.salary,
    //   Siblings: formData.siblings,
    //   Phone: formData.phone,
    //   Expectations: formData.expectations,
    //   Address: formData.address,
    //   Photo: formData.photo,
    // };

    if (!newError.name && !newError.phone && !newError.photo) {
      /**Store the dataUrl to [firebase storage] */
      const snapshot = await uploadBytes(storageRef, formData.photo);
      console.log("Image uploaded successfully!", snapshot);

      /**Getdownload url to upload the image */
      const downloadURL = await getDownloadURL(storageRef);
      /**Send user details to Firebase Database */
      try {
        await addDoc(dbref, {
          Name: formData.name,
          FathersName: formData.fathersname,
          MothersName: formData.mothersname,
          Gotra: formData.gotra,
          Nakshatra: formData.nakshatra,
          Gana: formData.gana,
          Nadi: formData.nadi,
          MadhwaSmartha: formData.madhwasmartha,
          Matha: formData.matha,
          DateTimeBirth: formData.datetimebirth,
          PlaceBirth: formData.placebirth,
          Height: formData.height,
          Qualification: formData.qualification,
          WorkingOrg: formData.workingorg,
          PlaceWork: formData.placework,
          Salary: formData.salary,
          Siblings: formData.siblings,
          Phone: formData.phone,
          Expectations: formData.expectations,
          Address: formData.address,
          Photo: downloadURL,
        }); // Add the data to the firebase database

        // const data = {
        //   Name: formData.name,
        //   Email: formData.email,
        //   Phone: formData.phone,
        //   State: formData.state,
        //   City: formData.city,
        //   Address: formData.address,
        //   Photo: downloadURL,
        // };

        // await axios.post("http://localhost:3001/send-whatsapp", data);
        // alert("Message sent successfully!");
      } catch (error) {
        alert(error);
        console.log(error);
      }

      // API to send the data to the intended What's App Number
      //       const receiverPhone = data.Phone;
      //       const message = `
      // Name: ${data.Name}
      // Phone: ${data.Phone}
      // Email: ${data.Email}
      // State: ${data.State}
      // City: ${data.City}
      // Address: ${data.Address}
      // Photo: ${downloadURL}`;
      //       const whatsappURL = `https://api.whatsapp.com/send?phone=${receiverPhone}&text= ${encodeURIComponent(
      //         message
      //       )}`;
      //       alert("Send through What's App Message");
      //       window.open(whatsappURL);
    }

    setFormData({
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

    if (fileRef.current) {
      fileRef.current.value = "";
    }

    setPreview("");
  };

  return (
    <>
      <FormSection>
        <h1 className="mb-4" style={{ textAlign: "center" }}>
          <img
            className="logo-left"
            src="./src/assets/hand-in-hand.png"
            alt=""
          />
          Sumadhwa Matrimony
          <img
            className="logo-right"
            src="./src/assets/hand-in-hand.png"
            alt=""
          />
        </h1>
        <StyledForm action="" onSubmit={handleSubmit}>
          <h1 className="mt-2 mb-3">Tell us about yourself</h1>
          <div className="two col-lg-12 col-11">
            <div className="input-holder col-lg-6">
              <label id="name-label" htmlFor="name">
                Name<sup>*</sup>
                {error.name && (
                  <span className="name-error error-message">
                    {formData.name === "" ? "Required" : ""}
                  </span>
                )}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                id="name"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="input-holder col-lg-6">
              <label id="fathers-label" htmlFor="fathersname">
                Father&apos;s Name
              </label>
              <input
                type="text"
                name="fathersname"
                value={formData.fathersname}
                id="fathersname"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="two col-lg-12 col-11">
            <div className="input-holder col-lg-6">
              <label id="mothers-label" htmlFor="mothersname">
                Mother&apos;s Name
              </label>
              <input
                type="text"
                name="mothersname"
                value={formData.mothersname}
                id="mothersname"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="input-holder col-lg-6">
              <label id="gotra-label" htmlFor="gotra">
                Gotra
              </label>
              <input
                type="text"
                name="gotra"
                value={formData.gotra}
                id="gotra"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="two col-lg-12 col-11">
            <div className="input-holder col-lg-6">
              <label id="nakshatra-label" htmlFor="nakshatra">
                Nakshatra
              </label>
              <input
                type="text"
                name="nakshatra"
                value={formData.nakshatra}
                id="nakshatra"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="input-holder col-lg-6">
              <label id="rashi-label" htmlFor="rashi">
                Rashi
              </label>
              <input
                type="text"
                name="rashi"
                value={formData.rashi}
                id="rashi"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="two col-lg-12 col-11">
            <div className="input-holder col-lg-6">
              <label id="gana-label" htmlFor="gana">
                Gana
              </label>
              <input
                type="text"
                name="gana"
                value={formData.gana}
                id="gana"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="input-holder col-lg-6">
              <label id="nadi-label" htmlFor="nadi">
                Nadi.
              </label>
              <input
                type="text"
                name="nadi"
                value={formData.nadi}
                id="nadi"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="two col-lg-12 col-11">
            <div className="input-holder col-lg-6">
              <label id="madhwa-smartha-label" htmlFor="madhwasmartha">
                Madhwa/ Smartha
              </label>
              <input
                type="text"
                name="madhwasmartha"
                value={formData.madhwasmartha}
                id="madhwasmartha"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="input-holder col-lg-6">
              <label id="matha-label" htmlFor="matha">
                Matha.
              </label>
              <input
                type="text"
                name="matha"
                value={formData.matha}
                id="matha"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="two col-lg-12 col-11">
            <div className="input-holder col-lg-6">
              <label id="datetime-birth-label" htmlFor="datetimebirth">
                Date & Time of Birth
              </label>
              <input
                type="text"
                name="datetimebirth"
                value={formData.datetimebirth}
                id="datetimebirth"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="input-holder col-lg-6">
              <label id="placebirth-label" htmlFor="placebirth">
                Place of Birth
              </label>
              <input
                type="text"
                name="placebirth"
                value={formData.placebirth}
                id="placebirth"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="two col-lg-12 col-11">
            <div className="input-holder col-lg-6">
              <label id="height-label" htmlFor="height">
                Height
              </label>
              <input
                type="text"
                name="height"
                value={formData.height}
                id="height"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="input-holder col-lg-6">
              <label id="qualification-label" htmlFor="qualification">
                Qualification
              </label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                id="qualification"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="two col-lg-12 col-11">
            <div className="input-holder col-lg-6">
              <label id="workingorg-label" htmlFor="workingorg">
                Working Organisation
              </label>
              <input
                type="text"
                name="workingorg"
                value={formData.workingorg}
                id="workingorg"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="input-holder col-lg-6">
              <label id="placeofwork-label" htmlFor="placework">
                Place of Working
              </label>
              <input
                type="text"
                name="placework"
                value={formData.placework}
                id="placework"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="two col-lg-12 col-11">
            <div className="input-holder col-lg-6">
              <label id="salary-label" htmlFor="salary">
                Salary Per Annum
              </label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                id="salary"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="input-holder col-lg-6">
              <label id="siblings-label" htmlFor="siblings">
                Siblings
              </label>
              <input
                type="text"
                name="siblings"
                value={formData.siblings}
                id="siblings"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="two col-lg-12 col-md-12 col-11">
            <div className="input-holder col-lg-12 col-md-11">
              <label id="phone-label" htmlFor="phone">
                Contact Nos.<sup>*</sup>
                {error.phone && (
                  <span className="error-message">
                    {formData.phone === "" ? "Required" : ""}
                  </span>
                )}
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                id="phone"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="two col-lg-12 col-md-12 col-11">
            <div className="input-holder col-lg-12 col-md-11">
              <label id="expectations-label" htmlFor="expectations">
                Expectations about Groom/Bride
              </label>
              <textarea
                type="text"
                name="expectations"
                value={formData.expectations}
                id="expectations"
                className="address-input"
                autoComplete="off"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="two col-lg-12 col-md-12 col-11">
            <div className="input-holder col-lg-12 col-md-11">
              <label id="address-label" htmlFor="address">
                Address
              </label>
              <textarea
                type="text"
                name="address"
                value={formData.address}
                id="address"
                className="address-input"
                autoComplete="off"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="two col-lg-12 col-md-12 col-11">
            <div className="last-input-holder input-holder col-lg-12 col-md-11">
              <label id="file-label" htmlFor="upload-file">
                Upload Photo in 4:5 Ratio<sup>*</sup>
                {error.photo && <span className="error-message">Required</span>}
              </label>
              <input
                type="file"
                accept="image/*"
                name="photo"
                id="upload-file"
                autoComplete="off"
                onChange={handelFileChange}
                ref={fileRef}
              />
              <div className="preview-holder">
                {preview && <img src={preview} alt="Preview" />}
              </div>
            </div>
          </div>
          <div className="button-holder col-lg-12 col-md-11 col-sm-10 col-10">
            <button id="submit" name="submit">
              Submit
            </button>
          </div>
        </StyledForm>
      </FormSection>
    </>
  );
}

export default Form;
