import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import currentUser from './reducers/currentUser'
//import reducer2 from './reducers/reducer2'
import userDays from './reducers/userDays'
import calendarDays from './reducers/calendarDays'
import graphDays from './reducers/graphDays'
import userForm from './reducers/userForm'



const reducer = combineReducers({
  currentUser,
  //reducer2
  userDays,
  calendarDays,
  graphDays,
  userForm
});


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(
    applyMiddleware(thunk, logger)
  )
)

export default store;

/*
I've just had this same problem with almost exactly the same code, and have managed to fix it.

Instead of passing three arguments to the createStore function, you need to pass two. To get around that, while still using the redux dev tools, you need to use the dev tools as the composer itself:

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
I realised this was the solution after digging around the redux library's, the debugger app's, and the dev tool's source code, and found this section: https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
*/
