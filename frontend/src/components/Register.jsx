import React from 'react'
import '../Styles/auth.css'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div className="authContainer">
      <h2>Register Here</h2>
      <div className="formGroup">
        <label htmlFor="name">Name</label>
        <input placeholder='Enter your Name' type="email" id='name'/>
        <img className='userImg' src="user.png" alt="email" />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email</label>
        <input placeholder='Enter your Email' type="email" id='email'/>
        <img src="email.svg" alt="email" />
      </div>
      <div className="formGroup">
        <label htmlFor="password">Password</label>
        <input placeholder='Enter your Password' type="password" id='password'/>
        <img src="lock.svg" alt="password" />
      </div><br />
      <button className='signBtn'>Sign up</button>
      <div className='signup'><p id='p'>Already have an account ? <NavLink className="NavLink" to='/login'>Sign In</NavLink></p></div>
    </div>
  )
}

export default Register