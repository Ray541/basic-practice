import { useState, useRef } from "react";
import axios from "axios";
import { StyledForm } from "./styles/Form.styled";
import "bootstrap/dist/css/bootstrap.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    address: "",
    photo: null,
  });

  const [preview, setPreview] = useState(null);
  const fileRef = useRef(null);

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

  const handleChange = (e) => {
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

        // Set canvas dimensions that matches the image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0);

        // Add watermark
        ctx.font = "bold 13px Arial";
        ctx.fillStyle = "#141414";
        ctx.fillText("Antstack", canvas.width - 80, canvas.height - 20);

        // Convert the canvas to the Blob
        canvas.toBlob((blob) => {
          const watermarkedImageURL = URL.createObjectURL(blob);

          setFormData({ ...formData, photo: watermarkedImageURL });
          setPreview(watermarkedImageURL);
        });
      };
    }
  };

  const handleSubmit = (event) => {
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

    const data = {
      Name: formData.name,
      Phone: formData.phone,
      Email: formData.email,
      State: formData.state,
      City: formData.city,
      Address: formData.address,
      Photo: preview,
    };

    if (!newError.name && !newError.phone && !newError.photo) {
      // API to store Data in Google sheets
      axios
        .post(
          "https://sheet.best/api/sheets/c3250328-3248-4d69-a2fd-93ffd8c7ad89",
          data
        )
        .then((raw) => {
          console.log(raw);
        });
      // API to send the data to the entered phone number
      const receiverPhone = data.Phone;
      const message = encodeURIComponent(`
        Name: ${data.Name}
        Phone: ${data.Phone}
        Email: ${data.Email}
        State: ${data.State}
        City: ${data.City}
        Address: ${data.Address}
        Photo: [Click here to view the photo](${data.Photo})
        `);
      const whatsappURL = `https://api.whatsapp.com/send?phone=${receiverPhone}&text= ${message}`;
      alert("Send through What's App Message");
      window.open(whatsappURL);
    }

    setFormData({
      name: "",
      phone: "",
      email: "",
      state: "",
      city: "",
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
      <h1 className="mb-4" style={{ textAlign: "center" }}>
        What&apos;s App Message Submission
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
            <label id="phone-label" htmlFor="phone">
              Phone<sup>*</sup>
              {error.phone && (
                <span className="error-message">
                  {formData.phone === "" ? "Required" : ""}
                </span>
              )}
            </label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              id="phone"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="two col-lg-12 col-11">
          <div className="input-holder col-lg-6">
            <label id="email-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              id="email"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="input-holder col-lg-6">
            <label id="state-label" htmlFor="state">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              id="state"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="two col-lg-12 col-md-12 col-11">
          <div className="input-holder col-lg-12 col-md-11">
            <label id="city-label" htmlFor="city">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              id="city"
              autoComplete="off"
              onChange={handleChange}
            />
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
              Upload Photo<sup>*</sup>
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
    </>
  );
}

export default Form;
