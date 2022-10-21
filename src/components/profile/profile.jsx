import PropTypes from 'prop-types';
import defaultImage from '../../logo192.png';
import css from 'components/profile/profile.module.css';
import { avatarSize } from 'constant';

export const Profile = (props) => {
    
    const {
        avatar = defaultImage,
        username = "Unknow",
        tag = "Unknow",
        location = "Not rusia",
        stats = "Unknow"} = props;
   
    return <div key={username} className={css.profile}>
  <div className={css.descriptionProfile}>
        <img
        src={avatar ?? defaultImage}
      alt="User avatar"
          className={css.avatarProfile}
          width={avatarSize.lg}
    />
        <p className={css.nameProfile}>{username}</p>
        <p className={css.tagProfile}>{tag}</p>
    <p className={css.locationProfile}>{location}</p>
  </div>

  <ul className={css.statsProfile}>
    <li>
      <span className={css.labelProfile}>Followers:</span>
      <span className={css.quantityProfile}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.labelProfile}>Views:</span>
      <span className={css.quantityProfile}>{stats.views}</span>
    </li>
    <li>
      <span className={css.labelProfile}>Likes:</span>
      <span className={css.quantityProfile}>{stats.likes}</span>
    </li>
  </ul>
</div>
} 

Profile.prototype = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.number.isRequired,
}
