import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogsReducer';


const Dialogs = (props) => {
    let dialogsComponents = props.dialogsPage.usersData.map((contact) => (<DialogItem id={contact.id} name={contact.name} />));
    let messagesComponents = props.dialogsPage.messagesData.map((item) => (<Message id={item.id} message={item.message} />));

    let newMessageElement = React.createRef();

    const sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    const changeTextValue = () => {
        let text = newMessageElement.current.value;
        let action = updateMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <main className={classes.dialogs}>
            <section className={classes.contacts}>
                {dialogsComponents}
            </section>
            <section className={classes.chat}>
                {messagesComponents}
                <textarea 
                ref={newMessageElement} value={props.dialogsPage.newMessageText} onChange={changeTextValue} placeholder='Enter you message...' ></textarea>
                <button onClick={sendMessage} className={classes.btn}>Confirm</button>
            </section>
        </main>
    )
}

export default Dialogs