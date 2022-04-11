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
import {Route} from 'react-router-dom'


import reducer from './redux/reducers/postReducer';
import { BrowserRouter } from 'react-router-dom';
const middleware = [thunk];

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

// const persistor = persistStore(store);

// ReactDOM.render(
//   <Provider store={store}>
//      {/* <PersistGate loading={null} persistor={persistor}>  */}
//     <BrowserRouter basename='/'>
//     <Route path={'/'} compoent={App} />
//     </BrowserRouter>
//     {/* </PersistGate> */}
//   </Provider>,
//   document.getElementById('root')
// );

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename='/'>
          <Route path={'/'} component={App}></Route>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<Root/>, document.getElementById('root'));
