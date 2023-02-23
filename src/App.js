import logo from './logo.svg';
import './App.css';
import Adduser from './components/Adduser';
import Nav from './components/Nav';
//component

import Edituser from './components/Edituser';
import Viewuser from './components/Viewuser';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
       <Route path='/Viewuser' element={<Viewuser/>}/>
       <Route path='/Adduser' element={<Adduser/>}/>
       <Route path='/Edituser' element={<Edituser/>}/>
    </Routes>
      

      
    </BrowserRouter>
  );
}

export default App;
