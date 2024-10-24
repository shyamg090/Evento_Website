import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Error from './pages/Error.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import Layout from "./Layout.jsx";
import About from "./pages/About.jsx";
import Events from "./pages/Events.jsx";
import AddEvent from "./pages/AddEvent.jsx";
import User from "./pages/User.jsx";
import EventsInfo from "./pages/EventsInfo.jsx";
import EditEvent from "./pages/EditEvent.jsx";

function App() {

  return (
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout>  <Home /> </Layout> } />
          <Route path='/about' element={<Layout>  <About /> </Layout> } />
          <Route path='/events' element={<Layout>  <Events /> </Layout>} />
          <Route path='/addevent' element={<Layout>  <AddEvent /> </Layout>} />
          <Route path='/user' element={<Layout>  <User /> </Layout>} />
          <Route path='/events/:id' element={<Layout>  <EventsInfo /> </Layout>} />
          <Route path='/user/editevents' element={<Layout>  <EditEvent /> </Layout>} />

          <Route path='*' element={<Error />} />

          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />

        </Routes>
      </BrowserRouter>
  )
}

export default App
