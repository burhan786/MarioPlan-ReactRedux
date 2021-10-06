import React,{ Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import {signOut} from '../../store/actions/authActions'
//NO State therefore this is a function based component

const SignedinLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to='/Create'>New Project</NavLink></li>
            <li><a onClick={props.signOut}to='/'>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    }
}


export default connect(null, mapDispatchToProps)(SignedinLinks)