
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UsContext from './context/UsContext.jsx'


createRoot(document.getElementById('root')).render(
  <UsContext>
    <App />
  </UsContext>
)
