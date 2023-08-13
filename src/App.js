import React, { useState } from 'react';

import Header from './Header';
import Post from './Post';

export default function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title 1', subtitle: 'Subtitle 1', likes: 20 },
    { id: Math.random(), title: 'Title 2', subtitle: 'Subtitle 2', likes: 10 },
    { id: Math.random(), title: 'Title 3', subtitle: 'Subtitle 3', likes: 40 },
  ]);

  function handleRefresh() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `Title ${prevState.length + 1}`,
          subtitle: `Subtitle ${prevState.length + 1}`,
          likes: 40
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
    <>
      <Header>
        <h2>Posts of the week</h2>
        <button onClick={handleRefresh}>Refresh</button>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          likes={post.likes}
          onRemove={handleRemovePost}
          post={{
            id: post.id,
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  );
}
