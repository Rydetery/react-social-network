import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

let store = {
    #state: {
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
        },
        sidebar: {}
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
        store._state.profilePage = profileReducer(store.#state.profilePage, action);
        store._state.dialogsPage = dialogsReducer(store.#state.dialogsPage, action);
        store._state.sidebar = sidebarReducer(store.#state.sidebar, action);

        this._callSubscriber(this.#state);
    }
}

export default store;