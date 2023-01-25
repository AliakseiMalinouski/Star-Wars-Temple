import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { store } from './Redux/store';
import { PageRouter } from './Router/PageRouter';
import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='Header'>
          <div className='Container'>
            <Header/>
          </div>  
        </div>
        <div className='Container'>
          <PageRouter/>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
