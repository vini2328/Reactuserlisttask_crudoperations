import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './component/Form';
import DashBoard from './component/DashBoard';
import Id from './component/Id';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<DashBoard />}>  </Route>
      <Route path="/user" element={<App />}>  </Route>
      <Route path="/create-user" element={<Form />}>  </Route>
      <Route path="/profile" element={<DashBoard />}>  </Route>
      <Route path="/profile/:id" element={<Id />}>  </Route>


      

    
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
