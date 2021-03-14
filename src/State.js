const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_USER = 'ADD-USER';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {
    _state: {
        dialogsPage: {
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
    },
        profilePage: {
            posts : [
                {id: 1, message: 'I am the Volan de Mort fan', likes: 6},
                {id: 2, message: 'I should never say his name!', likes: 13},
                {id: 3, message: 'However, now I am a Yoda from Star Wars fan', likes: 4}
                ],
            newPostText: ''
            }
    },
    _callSubscriber () {
        console.log('State was changed');
    },
    getState () {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        // Profile Page
        if (action.type === ADD_POST) {
            let post = {
                id: this._state.profilePage.posts[this._state.profilePage.posts.length],
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(post);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
            // Dialogs Page
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: this._state.dialogsPage.messagesData[this._state.dialogsPage.messagesData.length],
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === ADD_USER) {
            let user = {
                id: this._state.dialogsPage.usersData[this._state.dialogsPage.usersData.length],
                name: action.username
            }
            this._state.dialogsPage.usersData.push(user);
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({
    type: 'ADD-POST'
})
export const updateNewTextValueActionCreator = (text) => ({
    type: 'UPDATE-TEXT',
    newText: text
})
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
window.store = store;

export default store;