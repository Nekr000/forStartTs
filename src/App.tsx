import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <Accordion/>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />

        </div>
    );
}

function Star() {
    console.log("star")
    return <>STAR<br/> </>
}

function Accordion() {
    console.log("accordion")
    return <div>
        <AccordionTitle/>
        <AccordionBody/>
    </div>

}

function AccordionTitle() {
    return <h3>Меню</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default App;
