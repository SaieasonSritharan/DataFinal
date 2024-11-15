import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './contact'
import Homepage from './homepage'
import { ClerkProvider } from '@clerk/clerk-react'

const router=createBrowserRouter([
  {
  path:'/',
  element:<Homepage/>
  },
  {
    path:'/contact',
    element:<Contact/>
  }
])
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router}/>
    </ClerkProvider>
  </StrictMode>
)