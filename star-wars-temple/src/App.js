import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { store } from './Redux/store';
import { PageRouter } from './Router/PageRouter';
import './App.css';
import { Header } from './components/Header';
import { StreamingBanner } from './components/StreamingBanner';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='Header'>
          <div className='Container'>
            <Header/>
          </div>
        </div>
        <div className='Streaming'>
            <div className='Container'>
                <StreamingBanner/>
            </div>
          </div>  
        <div className='Content'>
          <div className='Container'>
            <PageRouter/>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
