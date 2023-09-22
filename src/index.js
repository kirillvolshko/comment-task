import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore} from 'redux'
import itemReducer from './store/reducer';
import { Provider } from 'react-redux';
const store = createStore(itemReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <App />
 </Provider>
);


