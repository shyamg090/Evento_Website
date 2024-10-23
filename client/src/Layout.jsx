import { useDispatch } from "react-redux";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { useEffect } from "react";
import { userLoggedin } from "./Redux/slices/AuthSlice";
import { saveevents } from "./Redux/slices/EventsSlice";


const Layout = ({ children }) => {

  const dispatch = useDispatch();

  const jwtset = () => {
    const jwt = localStorage.getItem("auth_token");
    const local_jwt = JSON.parse(jwt);

    if (local_jwt) {
      dispatch(userLoggedin(local_jwt.user));
    }
  }

  const getevents = async()=>{

    const events = await fetch('http://localhost:2002/events');
// console.log(events);
    const eventsdata = await events.json();

    dispatch(saveevents(eventsdata.getevents))
  }

  useEffect(() => {
    jwtset()
    getevents()
  }, [])

  return (
    <div>
      <Navbar />
      <main> {children} </main>
      <Footer />
    </div>
  )
}

export default Layout