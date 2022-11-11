
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes} from 'react-router-dom';

import Register from './components/Register/Register';
import Login from './components/login/Login';
import PrivateContext from './components/AuthCotext/PrivateContext';
import Dashboard from './components/about/Dashboard';



function App() {
  return (
    
    <div className='App'>
    <Navbar/>
   <Routes>
      
       <Route path="/" element={
        <PrivateContext>
          <Dashboard/>
        </PrivateContext>
       
       }/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
       
    </Routes> 
    </div>
    
  );
}

export default App;
