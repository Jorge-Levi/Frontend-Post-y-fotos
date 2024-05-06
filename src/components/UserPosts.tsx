// src/components/UserPosts.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserPost.css'; // Asegúrate de importar el CSS aquí
import { logApiRequest } from '../utils/logApiRequest';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const UserPosts: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        logApiRequest("https://jsonplaceholder.typicode.com/posts");
        const userPosts = response.data.filter((post: Post) => post.userId.toString() === userId);
        setPosts(userPosts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="post-item">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
