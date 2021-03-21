import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import Wallpaper from './Wallpaper/Wallpaper';
const Profile = (props) => {
    return(
      <section>
        <Wallpaper />
        <ProfileInfo />
        <MyPosts />
      </section>
    );
}

export default Profile;