import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, Store} from "redux";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store: Store<ArticlesState, ArticleAction> 
  & {dispatch: DisptachType} 
  = createStore(reducer, applyMiddleware(thunk));   //passed middleware.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>    {/**connect React to Redux by providing the store object as props to the Provider component. */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
