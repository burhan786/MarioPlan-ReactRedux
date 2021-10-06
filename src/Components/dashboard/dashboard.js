//we might use lifecycle methods for data access so we will make it a class based component
import React , {Component} from 'react';
import Notifications from './notification'
import ProjectList from '../projects/Projectlist';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Redirect} from 'react-router-dom'
class Dashboard extends Component{
    render() {
        if(!this.props.auth.uid) return <Redirect to='/signin/'></Redirect>
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={this.props.projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                            <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        projects : state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'projects'}
    ])
)(Dashboard)