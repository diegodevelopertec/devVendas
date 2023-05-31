import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { GlobalContextProvider } from './Context/contextGlobal'
import { Provider} from 'react-redux'
import store from './Redux/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <Provider store={store}>
   <GlobalContextProvider>
  <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
  </GlobalContextProvider>
 </Provider>
)
