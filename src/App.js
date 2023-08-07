import React from 'react';

import Header from './Header';
import Post from './Post';

export default function App() {
  return (
    <>
      <Header>
        <h2>Posts of the week</h2>
      </Header>

      <hr />

      <Post
        likes={20}
        post={{
          title: "Title 1",
          subtitle: "Subtitle 1",
        }}
      />
      <Post
        likes={50}
        post={{
          title: "Title 2",
          subtitle: "Subtitle 2",
        }}
      />
      <Post
        likes={10}
        post={{
          title: "Title 3",
          subtitle: "Subtitle 3",
        }}
      />
    </>
  );
}
