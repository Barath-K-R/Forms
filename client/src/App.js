import { useEffect, useState } from "react";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SideMenu from './components/SideMenu';
import FormBuilder from './pages/FormBuilder';
import Auth from './pages/Auth';
import { useUser } from "./context/UserContext";
import FormDisplay from "./pages/FormDisplay";
function App() {
  const {user,setUser}=useUser()
  useEffect(()=>{
    const getUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/login/success", {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        });
        setUser(response.data.user)
      } catch (error) {
        console.error("authentication has been failed");
      }
    };
       getUser();
  },[])
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex-col">
      <Navbar user={user}/>
      <div className='flex'>
        <SideMenu />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={user?<Home/>:<Auth/>}/>
            <Route path='/auth' element={<Auth />}/>
            <Route path='/formbuilder/:id' element={user?<FormBuilder />:<Auth/>}/>
            <Route path="/formdisplay/:id" element={<FormDisplay />}/>
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
    </DndProvider>
    
  );
}

export default App;
