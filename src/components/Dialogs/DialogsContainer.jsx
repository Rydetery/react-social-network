import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {

    const sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    const updateTextMessage = (text) => {
        let action = updateMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <Dialogs dialogsPage={props.dialogsPage} sendNewMessage={sendMessage} updateTextMessage={updateTextMessage} />
    )
}

export default DialogsContainer