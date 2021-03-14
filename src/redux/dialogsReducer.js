const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_USER = 'ADD-USER';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {

        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        case ADD_MESSAGE:
            let newMessage = {
                id: state.messagesData[state.messagesData.length],
                message: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;

        case ADD_USER:
            let user = {
                id: state.usersData[state.usersData.length],
                name: action.username
            }
            state.usersData.push(user);
            return state;

        default:
            return state;
    }
}

export const updateMessageTextActionCreator = (text) => ({
    type: 'UPDATE-MESSAGE-TEXT',
    newText: text
})
export const addMessageActionCreator = (text) => ({
    type: 'ADD-MESSAGE',
    message: text
})
export const addUserActionCreator = (name) => ({
    type: 'ADD-USER',
    username: name
})

export default dialogsReducer