import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import {Provider} from 'react-redux'
import eventoStore from './Redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={eventoStore}>
    <App/>
    </Provider>
  </StrictMode>,
);