import classes from './../Dialogs.module.css';

const Message = (props) => {
    return(
        <div className={classes.container}>
        <div className={classes.message}>{props.message}</div>
        </div>
    )
}

export default Message