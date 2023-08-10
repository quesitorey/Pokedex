import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from './store/store.js'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <Provider store={store}>
      <HashRouter>
  		  <App />
      </HashRouter>
    </Provider>
	</React.StrictMode>
)