import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import AppliedJob from './pages/AppliedJob/AppliedJob.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Statistics from './pages/Statistics/Statistics.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'


const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader: () => fetch("/feature.json")

      },
      {
        path:"/jobs",
        element:<AppliedJob/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/statistics",
        element:<Statistics/>
      },

      {
        path:"*",
        element:<NotFound/>
      }
    ]

    

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}>
     </RouterProvider>
  </React.StrictMode>,
)
