import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Contactus from './components/Contactus/Contactus.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import User from './components/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },{
//         path:"about",
//         element:<About/>
//       },{
//         path:"services",
//         element:<Services />
//       },{
//         path:"contactus",
//         element:<Contactus />
//       },{
//         path:"login",
//         element:<Login />
//       },{
//         path:"signup",
//         element:<Signup />
      
//       }
//     ]
//   }
// ]);

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App />}>
    <Route path='' element= {<Home />} />
    <Route path='about' element= {<About />} />
    <Route path='services' element= {<Services />} />
    <Route path='contactus' element= {<Contactus />} />
    <Route path='login' element= {<Login />} />
    <Route path='signup' element= {<Signup />} />
    <Route path='user/:userid' element= {<User />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
