import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore , applyMiddleware , compose} from 'redux';
import {Provider, useSelector} from 'react-redux'
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { createFirestoreInstance,reduxFirestore,getFirestore} from 'redux-firestore';
import { reactReduxFirebase,getFirebase,ReactReduxFirebaseProvider, isLoaded} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';
const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
      reduxFirestore(firebase, fbConfig)
  )
);

const rrConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}


const rrfProps = {
  firebase,
  config: rrConfig, fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};


function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <AuthIsLoaded><App /> </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
