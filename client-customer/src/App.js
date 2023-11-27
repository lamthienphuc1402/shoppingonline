import './App.css';
import React, { Component, Suspense } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import MyProvider from './contexts/MyProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading';
import "swiper/css";
import 'swiper/css/pagination';
class App extends Component {
  render() {
    return (
      <MyProvider>
        <BrowserRouter >
      

            <Main />

        </BrowserRouter>
      </MyProvider>
    );
  }
}
export default App;