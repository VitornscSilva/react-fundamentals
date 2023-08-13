import React, { useState } from 'react';

import Header from '../Header';
import Post from '../Post';
import { ThemeProvider } from '../../context/ThemeContext';

import { Title } from './styles';

export default function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title 1', subtitle: 'Subtitle 1', likes: 20, read: true, removed: false, },
    { id: Math.random(), title: 'Title 2', subtitle: 'Subtitle 2', likes: 10, read: false, removed: true, },
    { id: Math.random(), title: 'Title 3', subtitle: 'Subtitle 3', likes: 40, read: false, removed: false, },
  ]);

  function handleRefresh() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `Title ${prevState.length + 1}`,
          subtitle: `Subtitle ${prevState.length + 1}`,
          likes: 40,
          read: false,
        },
      ]);
    }, 2000);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map(
      post => (
        post.id === postId 
          ? { ...post, removed: true }
          : post
      )
    ));
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">Posts of the week</Title>
        <button onClick={handleRefresh}>Refresh</button>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
}
