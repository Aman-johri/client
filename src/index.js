import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';


import reducer from './redux/reducers/PostReducer';
const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}> 
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

