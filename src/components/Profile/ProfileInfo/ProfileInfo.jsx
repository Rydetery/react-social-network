import Avatar from './Avatar/Avatar';
import Information from './Information/Information';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <section className={classes.profile}>
          <Avatar></Avatar>
          <Information></Information>
        </section>
    );
}

export default ProfileInfo;