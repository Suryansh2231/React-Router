import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from './Layout'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import User from './Components/User'
import Github, { loaderInfoData } from './Components/Github'

// const router = createBrowserRouter([
//   {
//     path : '/' ,
//     element : <Layout/>,
//     children : [
//       {
//         path : '',
//         element : <Home/>
//       },
//       {
//         path : 'about',
//         element : <About/>
//       },
//       {
//         path : 'contact',
//         element : <Contact/>
//       },
//       {
//         path : 'github',
//         element : <Github/>
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<Layout/>}>
          <Route index element= {<Home/>}/>
          <Route path='about' element= {<About/>}/>
          <Route path='contact' element= {<Contact/>}/>
          <Route path='user/:userId' element= {<User/>}/>
          <Route 
          loader = {loaderInfoData}
          path='github' element= {<Github/>}/>
      </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
