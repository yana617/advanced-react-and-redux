import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { login, logout } from 'store/reducers/auth';

const Header = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn)
  const dispatch = useDispatch()

  return (
    <ul data-testid="header">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post a comment</Link>
      </li>
      <li>
        <button onClick={() => loggedIn ? dispatch(logout()) : dispatch(login())}>
          {loggedIn ? 'Sign out' : 'Sign in'}
        </button>
      </li>
    </ul>
  );
};

export default Header;
