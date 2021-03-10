let renderEntireTree = () => {
    console.log('State was changed');
}

let state = {
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
};
window.state = state;
export const addDialogsData = (name) => {
    let user = {
        id: state.dialogsData[state.dialogsData.length],
        name: name
    }
    state.dialogsData.push(user);
    renderEntireTree();
}
export const addPost = () => {
    let post = {
        id: state.profilePage.posts[state.profilePage.posts.length],
        message: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.posts.push(post);
    state.profilePage.newPostText = '';
    renderEntireTree();

}
export const updateText = (text) => {
    state.profilePage.newPostText = text;
    renderEntireTree();
}
export const addMessage = (message) => {
    let newMessage = {
        id: state.messagesData[state.messagesData.length],
        message: message
    }
    state.messagesData.push(newMessage)
    renderEntireTree()
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}
export default state;