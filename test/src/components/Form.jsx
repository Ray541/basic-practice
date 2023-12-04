// src/components/Form.js
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    try {
      // Upload photo with watermark
      const photoData = new FormData();
      photoData.append('photo', selectedFile);
      // Add logic to add watermark (use a library like watermarkjs)

      // Send data to WhatsApp API
      await axios.post('WhatsApp_API_URL', {
        message: `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}`,
        photo: photoWithWatermark, // Use the processed photo
      });

      // Send data to Google Sheets API (replace with your logic)
      await axios.post('Google_Sheets_API_URL', {
        name: data.name,
        phone: data.phone,
        email: data.email,
        photo:data.photoWithWatermark,
      });

      // Display success message
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input {...register('name')} />

      <label>Phone:</label>
      <input {...register('phone')} />

      <label>Email:</label>
      <input type="email" {...register('email')} />

      <label>Upload Photo:</label>
      <input type="file" onChange={onFileChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
