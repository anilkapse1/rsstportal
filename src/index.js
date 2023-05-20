import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//importing the Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux';
import store from './redux/store';
import Context from './Context';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Context>
      <App />
    </Context>
  </Provider>
);
