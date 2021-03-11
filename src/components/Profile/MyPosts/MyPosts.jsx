import CreatePost from './CreatePost/CreatePost';
import classes from './MyPosts.module.css';
import Posts from './Posts/Posts';
const MyPosts = (props) => {
  return (
    <section className={classes.MyPosts}>
      <h6>My post</h6>
      <CreatePost dispatch={props.dispatch} newPostText={props.profilePage.newPostText} />
      <Posts postData={props.profilePage.posts}/>
    </section>
  );
}

export default MyPosts;