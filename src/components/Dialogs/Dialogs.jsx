import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    let dialogsComponents = props.dialogsData.map((contact) => (<DialogItem id={contact.id} name={contact.name} />));
    let messagesComponents = props.messagesData.map((item) => (<Message id={item.id} message={item.message} />));

    let newMessageElement = React.createRef();

    const sendMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE', message: newMessageElement.current.value });
        newMessageElement.current.value = '';
    }

    return (
        <main className={classes.dialogs}>
            <section className={classes.contacts}>
                {dialogsComponents}
            </section>
            <section className={classes.chat}>
                {messagesComponents}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage} className={classes.btn}>Confirm</button>
            </section>
        </main>
    )
}

export default Dialogs