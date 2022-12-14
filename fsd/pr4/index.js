import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import './index.css';
// importing components
import About from './About';
import Contact from './Contact';
import Layout from './Layout';
import ContactUs from './ContactUs';
import Home from './Home';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
//wrapping content with browser router
    <BrowserRouter>
//defining routes
      <Routes>
//the first route component is layout
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          {/* <Route exact path="/contact" component={<Contact/>} /> */}
          <Route path="/contactus" element={<ContactUs/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 //render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

