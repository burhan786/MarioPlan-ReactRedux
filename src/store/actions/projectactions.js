export const createProject = (project) => {
    return (dispatch , getState , {getFirebase, getFirestore}) => {
        // make async call to database and then use dispatch method to resume the dispatch
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authid = getState().firebase.auth.uid;
        
        firestore.collection('projects').add({
            ...project,
            authFirstName:profile.firstName,
            authLastName: profile.lastName,
            authId : authid,
            createdAt : new Date()
        }).then(() => {
            dispatch({type : 'CREATE_PROJECT',project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR' , err});
        })
    }
};