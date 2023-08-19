import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Header from '../Header';

import Routes from '../../routes';

import { Nav } from './styles';

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/123?user=John">Post</Link>
      </Nav>
      <Routes />
    </BrowserRouter>
  );
}