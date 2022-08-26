import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/Styles/global.scss'
import "swiper/css/bundle"
import "swiper/css/pagination";

import { CardContextProvider } from './Context/CardsContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CardContextProvider>
      <App />
    </CardContextProvider>
  </React.StrictMode>
)
