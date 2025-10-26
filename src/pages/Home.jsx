
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Activities from '../components/home/Activities';
import Preparation from '../components/home/Preparation';
import Events from '../components/home/Events';
import Testimonials from '../components/home/Testimonials';
import Objectives from '../components/home/Objectives';
import Team from '../components/home/Team';
import Location from '../components/home/Location';


const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <About />
            <Activities />
            <Preparation />
            <Events />
            <Testimonials />
            <Objectives />
            <Team />
            <Location />
           
            <Footer />
        </div>
    );
};

export default Home;
