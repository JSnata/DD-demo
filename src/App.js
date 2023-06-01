import './App.css';
import Login from './components/Login';
import User from './components/User';
import { Routes, Route } from 'react-router-dom';
import MainHeader from './components/MainHeader/MainHeader';
import Sidebar from './components/SideBar/Sidebar';


function App() {
    return (
      <div>
        <p className='App'>
          <MainHeader />
          <Sidebar />
          <div className='main-content'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </div>
        </p>
      </div>
    )
  }
  
  export default App