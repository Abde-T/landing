import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faLink,
  faAdjust,
  faFilePdf,
  faSpinner,
  faTimes,
  faArrowUp,
  faCircleExclamation,
  faMoon, 
  faSun,
} from "@fortawesome/free-solid-svg-icons";
library.add(faLink,faCircleExclamation, faMoon, faSun, faAdjust,faFilePdf, faSpinner, faTimes, faArrowUp);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
