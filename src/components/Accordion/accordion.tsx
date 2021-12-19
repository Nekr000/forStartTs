import React from "react";

function Accordion(props:any) {
    console.log("accordion")
    return <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody title={props.value}/>
    </div>

}

function AccordionTitle(props:any) {
    return <h3>{props.title}</h3>
}

function AccordionBody(props:any ) {
    return <ul>
        <li>{props.value}</li>
        <li>{props.value2}</li>
        <li>{props.value3}</li>
    </ul>
}
export default Accordion;