import './App.css'
import AuthProvider from './Context/AuthProvider';
import ChartRoom from './components/ChatRoom/ChartRoom';
import Login from './components/Login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<ChartRoom/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    
  )
}

export default App
