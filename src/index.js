import React from 'react';
import ReactDOM from 'react-dom/client';
import { lazy } from 'react';
import { Route } from 'react-router-dom';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store} from './redux/store'
const App =lazy(() => import('./App'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
);


