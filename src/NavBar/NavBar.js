import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



import "./Navbar.css";

const NavBar = () => {

    
  const[show , handleShow] = useState(false);

  const history = useNavigate();

  // const handleAvatar = () => {
  //   history('/profile')
  // }

  const transitionNavBar = () => {
    if(window.scrollY > 100) {
      handleShow(true) ;
    }
    else {
      handleShow(false);
    }
  } ;

  useEffect(()=> {
    window.addEventListener("scroll" , transitionNavBar);
    return () => window.removeEventListener("scroll" , transitionNavBar) 
  },[])

  return (
    <div className={`nav ${show &&' nav_black'}`}>
      <div className="nav_contents">
        <img
          onClick={()=>history("/")}
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <img
          onClick={()=>history('/profile')}
          className="nav_avatar"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default NavBar;
