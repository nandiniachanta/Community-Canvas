// client/src/components/CreateIssue.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createIssue } from '../api';

const CreateIssue = () => {
  const { username } = useParams();
  const [formData, setFormData] = useState({
    category: '',
    images: '',
    description: '',
    location: '',
    status: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createIssue(username, formData);
      alert('Issue created successfully');
    } catch (error) {
      console.error('Error creating issue:', error);
    }
  };

  return (
    <div>
      <h2>Create Issue</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Images (comma separated URLs)</label>
          <input type="text" name="images" value={formData.images} onChange={handleChange} />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
        </div>
        <div>
          <label>Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div>
          <label>Status</label>
          <input type="text" name="status" value={formData.status} onChange={handleChange} required />
        </div>
        <button type="submit">Create Issue</button>
      </form>
    </div>
  );
};

export default CreateIssue;
