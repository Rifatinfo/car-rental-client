import Hero from "../../components/Hero/Hero";
import Parallex from "../../components/Parallex/Parallex";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Car Rental | Home</title>
            </Helmet>
            <Hero />
            <Parallex />
        </div>
    );
};

export default Home;