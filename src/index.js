import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import registerServiceWorker from './registerServiceWorker';

const Home = () => {
    return <h1> Shalom is the boss</h1>
}

const About = () => {
    return <h1> It is a beautiful day. The weather feels good and the view from my room is spectacular</h1>
}
ReactDOM.render(

    
    <BrowserRouter>
        <div>
            <Navbar/>
            <Route exact path="/" component={Welcome}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
        
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
