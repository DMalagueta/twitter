import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";

const api = axios.create({
  baseURL: "http://localhost:3003/",
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    /* return {
      user: { id: 3, name: "matateu", email: "matateu@example.com" },
    }; */
    const res = await api.post("/auth/validate", { token });
    return res.data;
  },
  signin: async (username: string, password: string) => {
    /* return {
            user: {id: 3, name: 'matateu',email: 'matateu@example.com' },
            token: '123456789'
        }; */
    const res = await api.post("/auth/login", { username, password });
    return res.data;
  },
  logout: async () => {
    return { status: true };
  },
  createUser: async (username: string, password: string) => {
    const res = await api.post("/users", { username, password });
    return res.data;
  },
  createPost: async (text: string, author: any) => {
    console.log(text, author);
    const res = await api.post("/posts", { text, author });
    return res.data;
  },
  getAllPosts: async () => {
    const res = await api.get("/posts");
    console.log(res.data);
    return res.data;
  },
  deletePost: async (id: string) => {
    const res = await api.delete(`/posts/${id}`);
    return res.data;
  },
  getPostsFromUser: async (userId: any) => {
    const res = await api.get(`/posts/${userId}`);
    return res.data;
  },
  likePost: async (token: string, post: string) => {
    const res = await api.post(`/posts/likePost`, { token, post });
    return res.data;
  },
});
