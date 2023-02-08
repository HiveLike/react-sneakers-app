import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Loader from './components/Loader/Loader'
import './index.scss'
import router from './router/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense fallback={<Loader/>}>
    <RouterProvider router={router} />
  </React.Suspense>
)
