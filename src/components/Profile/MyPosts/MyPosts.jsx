import CreatePostContainer from './CreatePost/CreatePostContainer';
import classes from './MyPosts.module.css';
import PostsContainer from './Posts/PostsContainer';
const MyPosts = (props) => {
  return (
    <section className={classes.MyPosts}>
      <h6>My post</h6>
      <CreatePostContainer />
      <PostsContainer />
    </section>
  );
}

export default MyPosts;