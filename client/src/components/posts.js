// client/src/components/Posts.js
import React, { useState, useEffect } from 'react';
import { getPostsByUser } from '../api';

const Posts = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPostsByUser(username);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [username]);

  return (
    <div>
      <h2>Posts by {username}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
