import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/Signup';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' exact element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
