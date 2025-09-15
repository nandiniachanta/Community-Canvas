// client/src/components/CreatePost.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createPost } from '../api';

const CreatePost = () => {
  const { username } = "NANDINI_123"; // Get the username from the URL parameters
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    images: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(username, formData);
      alert('Post created successfully');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
        </div>
        <div>
          <label>Images (comma separated URLs)</label>
          <input type="text" name="images" value={formData.images} onChange={handleChange} />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
