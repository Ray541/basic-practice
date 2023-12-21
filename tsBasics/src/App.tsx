import React, { useState } from 'react';
import './App.css'

interface FormData {
  type: string;
  tofrom: string;
  details: string;
  amount: string;
}

interface Item {
  id: number;
  heading: string,
  content: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    type: "",
    tofrom: "",
    details: "",
    amount: "",
  })

  const [items, setItems] = useState<Item[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData, [e.target.id || e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const content = formData.type === "Invoice"
      ? `${formData.tofrom} owes Rs.${formData.amount} for ${formData.details}`
      : `${formData.tofrom} owned Rs.${formData.amount} for ${formData.details}`;

    const newItem: Item = {
      id: new Date().getTime(),
      heading: formData.type,
      content: content,
    };

    setItems([...items, newItem]);

    setFormData({
      type: "",
      tofrom: "",
      details: "",
      amount: "",
    });
  }

  return (
    <>
      <div className="wrapper">
        <h1>TypeScript Finance</h1>
        <div className='holder'>
          <ul className="item-list">
            {items.map((item) => (
              <li key={item.id}>
                <h4>{`${item.heading}`}</h4>
                <p>{`${item.content}`}</p>
              </li>
            ))}
          </ul>
        </div>
        <footer>
          <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="field">
              <label>Type:</label>
              <select id="type" name="type" onChange={handleChange} value={formData.type}>
                <option value="Choose">Choose One</option>
                <option value="Invoice">Invoice</option>
                <option value="Payment">Payment</option>
              </select>
            </div>
            <div className="field">
              <label>To / From:</label>
              <input type="text" id="tofrom" onChange={handleChange} value={formData.tofrom} />
            </div>
            <div className="field">
              <label>Details:</label>
              <input type="text" id="details" onChange={handleChange} value={formData.details} />
            </div>
            <div className="field">
              <label>Amount Rs.:</label>
              <input type="number" id="amount" onChange={handleChange} value={formData.amount} />
            </div>
            <input type="submit" id="submit" value="Add" />
          </form>
        </footer>
      </div>
    </>)
}

export default App
