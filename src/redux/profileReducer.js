const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';

let initialState = {
    posts : [
        {id: 1, message: 'I am the Volan de Mort fan', likes: 6},
        {id: 2, message: 'I should never say his name!', likes: 13},
        {id: 3, message: 'However, now I am a Yoda from Star Wars fan', likes: 4}
        ],
    newPostText: ''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: 
            let post = {
                id: state.posts[state.posts.length],
                message: state.newPostText,
                likes: 0
            }
            state.posts.push(post);
            state.newPostText = '';
            return state;

        case UPDATE_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: 'ADD-POST'
})
export const updateNewTextValueActionCreator = (text) => ({
    type: 'UPDATE-TEXT',
    newText: text
})


export default profileReducer