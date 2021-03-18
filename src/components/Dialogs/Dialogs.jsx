import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    let dialogsComponents = props.dialogsPage.usersData.map((contact) => (<DialogItem id={contact.id} name={contact.name} />));
    let messagesComponents = props.dialogsPage.messagesData.map((item) => (<Message id={item.id} message={item.message} />));

    let newMessageElement = React.createRef();

    const sendMessage = () => {
        props.sendNewMessage();
    }
    const changeTextValue = () => {
        let text = newMessageElement.current.value;
        props.updateTextMessage(text);
    }

    return (
        <main className={classes.dialogs}>
            <section className={classes.contacts}>
                {dialogsComponents}
            </section>
            <section className={classes.chat}>
                {messagesComponents}
                <div>
                    <textarea 
                    ref={newMessageElement} value={props.dialogsPage.newMessageText} onChange={changeTextValue} placeholder='Enter you message...' ></textarea>
                    <button onClick={sendMessage} className={classes.btn}>Send message</button>
                </div>
            </section>
        </main>
    )
}

export default Dialogs