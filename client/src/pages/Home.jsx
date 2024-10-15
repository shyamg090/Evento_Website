import Companies from "../components/Companies";
import FindEvents from "../components/FindEvents"
import Footer from "../components/Footer";
import HostEvent from "../components/HostEvent";
import Landing from "../components/Landing"
import PopularEvent from "../components/PopularEvent";

const Home = () => {
    return (
        <div>
            <Landing />
            <FindEvents />
            <PopularEvent />
            <HostEvent />
            <Companies />
            <Footer/>
        </div>
    )
}

export default Home;