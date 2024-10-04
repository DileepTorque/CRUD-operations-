import React from 'react';
import User from './Adduser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Myapi from './Myapi';
import Code from './Table';
import Updateuser from './Update';

function App() {
  return (
   <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Code/>}/>
      <Route path='/Click' element={ <User/>}/>
      <Route path="/Update/:id" element={<Updateuser/>}/>
    </Routes>
    </BrowserRouter>
   </>

  )
}

export default App;
