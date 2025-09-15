import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/users',
});

// User API
export const getUsers = () => api.get('/');
export const getUserByUsername = (username) => api.get(`/${username}`);
export const createUser = (user) => api.post('/', user);

// Post API
export const getPostsByUser = (username) => api.get(`/${username}/post`);
export const createPost = (username, post) => api.post(`/${username}/addpost`, post);

// Issue API
export const getIssuesByUser = (username) => api.get(`/${username}/issue`);
export const createIssue = (username, issue) => api.post(`/${username}/addissue`, issue);

// Fundraiser API
export const getFundraisersByUser = (username) => api.get(`/${username}/fundriser`);
export const createFundraiser = (username, fundraiser) => api.post(`/${username}/addfr`, fundraiser);

// Comment API
export const createComment = (username, postId, comment) => api.post(`/${username}/${postId}`, comment);

export default api;
