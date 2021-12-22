import Style from "./Dialogs.module.css";
import React from "react";


const Message = (props:any) => {
    return (

        <div className={Style.messages}>
            <div className={Style.message}>{props.message}</div>
        </div>
    )
}

export default Message;