import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Error from './pages/Error.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import Layout from "./Layout.jsx";

function App() {

  return (
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout>  <Home /> </Layout> } />
          <Route path='/services' element={<Layout>  <Home /> </Layout>} />
          <Route path='/*' element={<Error />} />


          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />

        </Routes>
      </BrowserRouter>
  )
}

export default App
