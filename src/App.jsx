import './App.css'
import ChartRoom from './components/ChatRoom/ChartRoom';
import Login from './components/Login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChartRoom/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
