import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../Styles/Navbar.css'
import { useUser } from "../Context/UserContext";
import UseAnimations from "react-useanimations";
import menu2 from 'react-useanimations/lib/menu2';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const { user, setUser } = useUser()
  return <div className="navbar">
    <nav className={isOpen ? "NavOpen" : "NavClose"}>
      {user && <>
        <div className="profile">
          <img src={user.photoURL ? user.photoURL : "profile.png"} alt="profile" />
          <div className="userinfo">
            <p>{user?.name}</p>
            <small>{user?.email}</small>
          </div>
        </div>
        <h1 style={{ animationDelay: "0.3s" }}>
          Welcome to My App!
          <span>
            <span>Engage with us</span>
            <span>Explore My Apps</span>
            <span>Get Inspired</span>
            <span>Enjoy your stay</span>
            <span>Join the community</span>
          </span>

        </h1>
        <ul>
          <li>
            <NavLink style={{ animationDelay: "0.3s" }} className="links" to='/'><i className="bi bi-house icon" ></i>Home</NavLink>
          </li>
          <li>
            <NavLink style={{ animationDelay: "0.4s" }} className="links" to='/GalleryApp'><i className="bi bi-image icon"></i>Gallery App</NavLink>
          </li>
          <li>
            <NavLink style={{ animationDelay: "0.5s" }} className="links" to="/JokesApp"><i className="bi bi-emoji-laughing icon"></i> Jokes App</NavLink>
          </li>
          <li>
            <NavLink style={{ animationDelay: "0.6s" }} className="links" to="TypingTestApp/"><i class="bi bi-keyboard icon"></i> Typing test App</NavLink>
          </li>
        </ul>
        <div className="logout" onClick={() => { setUser(null), localStorage.clear(), navigate('/login', { replace: true }) }}>
          <i className="bi bi-power logoutbtn"></i> Logout
        </div>
      </>}
      <UseAnimations speed={3} id="menu" animation={menu2} size={32} onClick={() => setIsOpen(!isOpen)} />
    </nav>

  </div>;
};

export default Navbar;
