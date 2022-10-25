
import PropTypes from 'prop-types';
import css from 'components/friendsList/friendsList.module.css';
import { avatarSize } from 'constant';


export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return <li className={css.friendFriendsList} key={id} style={{
        backgroundColor: isOnline ? 'greenyellow' : 'lightcoral'
      }}>
            <span className={`${css.statusFriendsList}`}>{isOnline ? ("OnLine") : ("OffLine")}</span>
            <img className={css.avatarFriendsList} src={avatar} alt="User avatar" width={avatarSize.md} />
            <p className={css.nameFriendsList}>{name}</p>
      </li>
}


FriendListItem.prototype = {
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
