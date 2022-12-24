import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>“Books serve to show a man that those original thoughts of his aren't very new after all.” “The man who does not read good books is no better than the man who can't.” “Show me a family of readers, and I will show you the people who move the world.”</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header