// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    
     
      <div className = 'flex-parent' /> 
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
