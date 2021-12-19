import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/accordion";
import Rating from "./components/Star/Star";

function App() {
    return (
        <div>
            <Pagetitle title={'This is APP component'} />
            <input/>
            <input type="password" />
            <Rating value={3} />
            <Accordion title={"Меню"} value={1} value2={2} value3={3}/>
            <Rating value={4} />

        </div>
    );
}

function Pagetitle(props:any) {
    return <h1>{props.title}</h1>
}

export default App;
