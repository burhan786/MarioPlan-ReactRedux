import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import SignedinLinks from './SignedInLinks'
import SignedoutLinks from './SignedOutLinks'
import { connect } from 'react-redux';
//NO State therefore this is a function based component

const Navbar = (props) => {
    const {auth, profile} = props;
    //console.log(auth);
    const links = auth.uid ? <SignedinLinks profile={profile}/> : <SignedoutLinks/>
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
            <Link to='/' className="brand-logo">MarioPlan</Link>
            {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
//    console.log(state);
    return {
        auth : state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps) (Navbar)