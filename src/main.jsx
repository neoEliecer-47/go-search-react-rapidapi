import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from './components/Router'
import { RouterProvider } from 'react-router-dom'
import ResultProvider from './context/ResultContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ResultProvider>
        <RouterProvider router={Router}/>
    </ResultProvider>
  
)
