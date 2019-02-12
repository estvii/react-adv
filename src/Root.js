import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
// import reduxThunk from 'redux-thunk';
// import reduxPromise from 'redux-promise';



// const { children, initialState } = props
export default ( {children, initialState = {} }) => {
    const store = createStore(
        reducers, 
        initialState,
        applyMiddleware(async, stateValidator) //order doesnt matter too muhc with middleware
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}