import React from "react";

export function Rating(props: any) {

    if (props.value === 1) {
        return (
            <div>
                <Stars selected={true}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
            </div>
        );
    }
    if (props.value === 2) {
        return (
            <div>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
            </div>
        );
    }
    if (props.value === 3) {
        return (
            <div>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
            </div>
        );
    }
    if (props.value === 4) {
        return (
            <div>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={false}/>
            </div>
        );
    }
    if (props.value === 5) {
        return (
            <div>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={true}/>
            </div>
        );
    }    else {
        return (
            <div>
                <Stars selected={false}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
            </div>
        );
    }
}


function Stars(props: any) {
    if (props.selected === true) {
        return <span><b>STAR </b></span>
    } else {
        return <span>star </span>
    }
}

export default Rating;