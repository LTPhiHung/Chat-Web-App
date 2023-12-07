import './App.css'
import AuthProvider from './Context/AuthProvider';
import ChatRoom from './components/ChatRoom/ChatRoom';
import Login from './components/Login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from 'antd';

function App() {
  const theme = {
    token: {
      borderRadius: 2
    },
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <ConfigProvider theme={theme}>
          <Routes>
            <Route path='/' element={<ChatRoom/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </ConfigProvider>
      </AuthProvider>
    </BrowserRouter>
    
  )
}

export default App
