import './App.css';
import Login from './components/Login';
import User from './components/User';
import { Routes, Route } from 'react-router-dom';
import MainHeader from './components/MainHeader/MainHeader';
import Sidebar from './components/SideBar/Sidebar';


function App() {
    return (
      <div className='main_container'>
          <MainHeader />
          <Sidebar />
          <div className='main_content'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </div>
      </div>
    )
  }
  
  export default App