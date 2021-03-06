import { connect } from 'react-redux';
import Posts from './Posts';


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.posts
    }
}

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;