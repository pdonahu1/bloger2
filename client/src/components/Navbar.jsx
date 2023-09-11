import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../images/logo2.png";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutNavbar = () => {
    logout();
    navigate("/");
  };

  return (
    
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6 className="ps-2"> Art</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6> Science</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>Technology</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>Cinema</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>Design</h6>
          </Link>
          <Link className="link-e" to="/?cat=food">
            <h6>Food</h6>
          </Link>
          <span className="pb-2">{currentUser?.username}</span>
          {currentUser ? (
            <span className="link pb-2" onClick={logoutNavbar}>
              <Link className="link ps-2" to="/">
            <IoLogOutOutline /></Link>
            
            
           
      </span>
         ) : (
            
            <Link className="link ps-2" to="/login">
              <h6>Login</h6>
            </Link>
          

          
           )} 
        
        <span className="write link">
            <Link className="link ps-2" to="/write">
              New
            </Link>
          </span>
        
         
            
          
        
          
        
           
        </div>
      </div>
    </div>
  );
};

export default Navbar;