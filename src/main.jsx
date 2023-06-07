import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router'

/* eslint-disable */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container mx-auto' style={{ fontFamily: 'EB Garamond, serif', fontFamily: 'Montserrat Alternates, sans-serif' }}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
