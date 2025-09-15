// client/src/components/CreateFundraiser.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createFundraiser } from '../api';

const CreateFundraiser = () => {
  const { username } = useParams();
  const [formData, setFormData] = useState({
    amountRaised: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createFundraiser(username, formData);
      alert('Fundraiser created successfully');
    } catch (error) {
      console.error('Error creating fundraiser:', error);
    }
  };

  return (
    <div>
      <h2>Create Fundraiser</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount Raised</label>
          <input type="number" name="amountRaised" value={formData.amountRaised} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Create Fundraiser</button>
      </form>
    </div>
  );
};

export default CreateFundraiser;
