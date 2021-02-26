import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter} from 'react-router-dom'


import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';  

{/* 34 */}

let initialState =[
  {id : 0, name : 'cool shoes', quan: 2},
{id : 1, name : 'cool shoes11', quan: 3}
];

function reducer(state=initialState, action) {

  if (action.type ==='plus') {
    let copy = [...state];
    copy[0].quan++;
    return copy    

  } else if(action.type ==='minus'){
    let copy = [...state];
    copy[0].quan--;
    return copy

  }
  else {
    return state    
  }
  
}

let initialState2 = true;

function reducer2(state=initialState2,action) {
  if (action.type === 'closeAlert') {
    state = false;
    return state;
    
  } else {
    
    return state
  }



  
}

const store = createStore(combineReducers({reducer,reducer2}));


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
