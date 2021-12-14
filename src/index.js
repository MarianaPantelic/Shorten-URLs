import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import CallToAction from './components/call-to-action';
import Footer from './components/footer';
import Hero from './components/hero';
import NavBar from './components/navbar';
import Search from './components/search';
import Statistics from './components/statistics';

const App = () => {
    return(
        <>
            <NavBar/>
            <Hero/>
            <Search/>
            <Statistics/>
            <CallToAction/>
            <Footer/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));