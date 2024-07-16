import { useEffect, useState } from "react";
import { BrowserRouter, Route,Routes, useFetcher } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SideMenu from './components/SideMenu';
import FormBuilder from './pages/FormBuilder';
import Auth from './pages/Auth';
function App() {
  const [user, setUser] = useState(null);
  useEffect(()=>{
       const getUser=async()=>{
        console.log('getting user')
            const res=await axios.get('http://localhost:5000/api/auth/login/success');
       }
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
            <Route path='/' element={<Auth />}/>
            <Route path='/builder' element={<FormBuilder />}/>
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
    </DndProvider>
    
  );
}

export default App;
