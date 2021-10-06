import React,{ Component } from 'react';
import {NavLink} from 'react-router-dom';
//NO State therefore this is a function based component

const SignedoutLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/Signup'>Signup</NavLink></li>
            <li><NavLink to='/Signin'>LogIn</NavLink></li>
        </ul>
    )
}

export default SignedoutLinks