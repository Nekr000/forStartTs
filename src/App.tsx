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
            <Accordion titleValue={"Меню"} collapsed={false} />
            <Rating value={4} />

        </div>
    );
}
type PageTitlePropsType = {
    title: string
}
function Pagetitle(props:PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
