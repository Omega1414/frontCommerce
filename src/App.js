import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [theme, setTheme] = useState(null);
 

  // İlk dəfə açanda localStorage yoxlanır
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
      localStorage.setItem('theme', systemTheme);
    }
  }, []);

  // theme dəyişəndə classList və localStorage yenilənir
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (theme) {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  if (theme === null) return null;
  return (
    <div className='overflow-hidden'   style={{
        backgroundColor: theme === "dark" ? "#111827" : "#fff",
        transition: "background-color 0.3s ease",
      }}>
      <Router>
        <Header handleThemeSwitch={handleThemeSwitch} theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path='/' element={<Home theme={theme} />} />
          {/* <Route path='/product/:id' element={<ProductDetails />} /> */}
        </Routes>
        <Sidebar />
      
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};


export default App;
