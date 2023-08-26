import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'

hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>,
  </BrowserRouter>

)

