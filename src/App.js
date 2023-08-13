import React, { useState } from 'react';

import Header from './Header';
import Post from './Post';
import { ThemeProvider } from './ThemeContext';

export default function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title 1', subtitle: 'Subtitle 1', likes: 20, read: true },
    { id: Math.random(), title: 'Title 2', subtitle: 'Subtitle 2', likes: 10, read: false },
    { id: Math.random(), title: 'Title 3', subtitle: 'Subtitle 3', likes: 40, read: false },
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
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
    ));
  }

  return (
    <ThemeProvider>
      <Header>
        <h2>Posts of the week</h2>
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
