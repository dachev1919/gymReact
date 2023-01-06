import {useEffect} from "react";
import Aos from 'aos';
import './App.css';
import 'remixicon/fonts/remixicon.css';
import Header from "./components/Header/Header";
import Hero from './components/UI/Hero';
import Exercises from "./components/UI/Exercises";
import Start from "./components/UI/Start";
import Pricing from "./components/UI/Pricing";
import Testimonials from "./components/UI/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
    useEffect(() => Aos.init, []);
    const zoom = document.querySelectorAll('html:not(.no-js) [data-aos^="zoom"][data-aos^="zoom"]');
    const fade = document.querySelectorAll('html:not(.no-js) [data-aos^="fade"][data-aos^="fade"]');

    return (
        <>
            <Header/>
            <Hero/>
            <Exercises/>
            <Start/>
            <Pricing/>
            <Testimonials/>
            <Footer/>
        </>
    );
}

export default App;
