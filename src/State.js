let store = {
    _state: {
        dialogsData : [
            {id: 1, name: 'Dmitry'},
            {id: 2, name: 'Nikolay'},
            {id: 3, name: 'Valery'},
            {id: 4, name: 'Svetlana'},
            {id: 5, name: 'Ignat'},
            {id: 6, name: 'Semen'}
        ],
        profilePage: {
            posts : [
                {id: 1, message: 'I am the Volan de Mort fan', likes: 6},
                {id: 2, message: 'I should never say his name!', likes: 13},
                {id: 3, message: 'However, now I am a Yoda from Star Wars fan', likes: 4}
                ],
            newPostText: 'Type something'
            },
        messagesData : [
              {id: 1, message: 'Hello there!'},
              {id: 2, message: 'General Kenobi?!'}
        ]
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
        if (action.type === 'ADD-POST') {
            let post = {
                id: this._state.profilePage.posts[this._state.profilePage.posts.length],
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(post);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: this._state.messagesData[this._state.messagesData.length],
                message: action.message
            }
            this._state.messagesData.push(newMessage)
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-USER') {
            let user = {
                id: this._state.dialogsData[this._state.dialogsData.length],
                name: action.username
            }
            this._state.dialogsData.push(user);
            this._callSubscriber(this._state);
        }
    }
}

window.store = store;

export default store;