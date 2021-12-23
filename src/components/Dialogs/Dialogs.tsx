import React from 'react';
import Style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';







const Dialogs = (props: any) => {
    let dialogElements = props.dialog
        .map((dialogs:any) => <DialogItem name={dialogs.name} id={dialogs.id}/>);
    let messageElements = props.message
        .map((dialog: any) => <DialogItem name={dialog.message} id={dialog.id}/>);
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