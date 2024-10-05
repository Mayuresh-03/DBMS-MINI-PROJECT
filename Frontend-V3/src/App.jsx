import logo from './logo.svg';
import './App.css';
import './index.css';
import { RouterProvider, Outlet, useLocation } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Provider } from "react-redux"
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import Context from './context';
import SideBar from './components/SideBar';
import Overlay from './components/Overlay';


function App() {

  const items = [
    {
      id: '01',
      category: 'Airbuds',
      productImage: 'Home_Images/Airpods.jpg',
    },
    {
      id: '02',
      category: 'Bags',
      productImage: 'Home_Images/Bags.jpg',
    },
    {
      id: '03',
      category: 'Headphone',
      productImage: 'Home_Images/Headphones.jpg',
    },
    {
      id: '04',
      category: 'Laptop',
      productImage: 'Home_Images/Laptop.jpg',
    },
    {
      id: '05',
      category: 'Mouse',
      productImage: 'Home_Images/Mouse.jpg',
    },
    {
      id: '06',
      category: 'Shoes',
      productImage: 'Home_Images/Shoes.jpg',
    },
    {
      id: '07',
      category: 'Phone',
      productImage: 'Home_Images/Smart Phones.jpg',
    },
    {
      id: '08',
      category: 'Speaker',
      productImage: 'Home_Images/Speakers.jpg',
    },
    {
      id: '09',
      category: 'Books',
      productImage: 'Home_Images/Books.jpg',
    },
    {
      id: '10',
      category: 'Watch',
      productImage: 'Home_Images/Watches.jpg',
    },
    {
      id: '11',
      category: 'Bottle',
      productImage: 'Home_Images/Bottle.webp',
    }
  ];
  

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation()

  const toggleSidebar = () => {
    setIsSidebarVisible(prevState => !prevState);
  };

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <Context.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {isLoggedIn  && location.pathname !== '/' && <Header toggleSidebar={toggleSidebar} />}
        <main>
          <Outlet />
        </main>
        {isLoggedIn  && location.pathname !== '/' && <Footer />}
        <SideBar items={items} isVisible={isSidebarVisible} onClose={toggleSidebar} />
        <Overlay isVisible={isSidebarVisible} onClick={toggleSidebar} />
      </Context.Provider>
    </>
  );
}

export default App
