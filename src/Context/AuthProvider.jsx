import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase/config';

import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user)
      if(user) {
        const { displayName, email, photoURL } = user;
        setUser({
          displayName, email, photoURL
        });
        setIsLoading(false);
        toast.success("Success Notification !", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        navigate('/');
      }
      else {
        setUser({});
        setIsLoading(false);
        toast.error('Login fail', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        navigate('/login');
      }
    })
      // clean function
      return () => {
        unsubscribe();
      }
  }, [navigate])
  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin/> : children}
      <ToastContainer />
    </AuthContext.Provider>
  )
}
