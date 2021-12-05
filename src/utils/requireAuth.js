import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const requireAuth = (ChildComponent) => {
  const ComposedComponent = () => {
    const loggedIn = useSelector(state => state.auth.loggedIn);
    const navigate = useNavigate();

    useEffect(() => {
      if (!loggedIn) {
        navigate('/');
      }
    }, [loggedIn, navigate]);

    return (<ChildComponent />);
  }

  return ComposedComponent;
}

export default requireAuth;
