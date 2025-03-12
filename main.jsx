import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ContactUs from './components/ContactUs'
import About from './components/About'
import Home from './components/Home'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsAndConditions from './components/TermsAndConditions'
import Layout from './Layout'

const router = createBrowserRouter(
  createRoutesFromElements(     
    <Route path="/" element={<Layout />}>
      <Route path='home' element={<Home/>} />
      <Route path='contact' element={<ContactUs/>} />
      <Route path="about" element={<About/>} />
      <Route path="privacyPolicy" element={<PrivacyPolicy/>} />
      <Route path="terms" element={<TermsAndConditions/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)