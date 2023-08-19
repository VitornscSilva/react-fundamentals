import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { 
      opacity: 0, transform: 'translateY(50px)', position: 'absolute', left: 0, 
      right: 0, paddingRight: '8px', paddingLeft: '8px', paddingBottom: '10px' 
    },
    enter: { 
      opacity: 1, transform: 'translateY(0px)', position: 'absolute', left: 0, 
      right: 0, paddingRight: '8px', paddingLeft: '8px', paddingBottom: '10px' 
    },
    leave: { 
      opacity: 0, transform: 'translateY(50px)', position: 'absolute', left: 0, 
      right: 0, paddingRight: '8px', paddingLeft: '8px', paddingBottom: '10px' 
    },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </animated.div>
  ));
}