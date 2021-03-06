import React, { Component } from 'react'
import {createProject} from '../../store/actions/projectactions'
import {connect} from 'react-redux'
import { Redirect } from 'react-router'
class CreateProject extends Component {
    state = {
        title : '',
        content : ''
    }
    handleChange = (e) => {
        console.log(e);
        this.setState({
            [e.target.id] : e.target.value
        });
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state);
        this.props.history.push('/');
    }
    render() {
        if(!this.props.auth.uid){ return <Redirect to='/signin/'/>}
        return (
            
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createProject : (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
