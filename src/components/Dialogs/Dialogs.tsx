import React from 'react';
import Style from './Dialogs.module.css'
import DialogItem from './DialogItem';


let dialogsData = [
    {id: "1", name: "Andrey"},
    {id: "2", name: "Liza"},
    {id: "3", name: "Rengar"},
    {id: "4", name: "Donowan"},
    {id: "5", name: "Woody"},
    {id: "6", name: "Icent"}
]
let dialogElements = dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
let messagesData = [
    {id: "1", message: "Hi"},
    {id: "2", message: "How are u?"},
    {id: "3", message: "What about dota ?"},
    {id: "4", message: "Hi"},
    {id: "5", message: "Hi"},
    {id: "6", message: "Hi"}
]
let messageElements = messagesData
    .map(dialog => <DialogItem name={dialog.message} id={dialog.id}/>);


const Dialogs = (props: any) => {
    return (
        <div className={Style.dialogs}>
            <div className={Style.dialogsItem}>
                {dialogElements}
            </div>
            <div>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs;