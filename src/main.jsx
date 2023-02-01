import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.scss'
import router from './router/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense fallback={<h2>Загрузка</h2>}>
    <RouterProvider router={router} />
  </React.Suspense>
)
