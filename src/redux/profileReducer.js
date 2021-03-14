const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';

const profileReducer = (state, action) => {
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