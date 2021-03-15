const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_USER = 'ADD-USER';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


 let initialState = {
    usersData : [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Nikolay'},
        {id: 3, name: 'Valery'},
        {id: 4, name: 'Svetlana'},
        {id: 5, name: 'Ignat'},
        {id: 6, name: 'Semen'}
    ],
    messagesData : [
          {id: 1, message: 'Hello there!'},
          {id: 2, message: 'General Kenobi?!'}
    ],
    newMessageText : ''
}

const dialogsReducer = (state = initialState, action) => {
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