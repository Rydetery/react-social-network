import Post from './Post/Post';
import classes from './Posts.module.css';
const Posts = (props) => {
  let postComponents = props.postData.map( item => <Post message={item.message} likes={item.likes} /> )

  return (
    <section className={classes.posts}>
      {postComponents}
    </section>
  );
}

export default Posts;