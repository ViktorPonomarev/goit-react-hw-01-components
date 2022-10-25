import { FriendListItem } from './friendListItem';

export const FriendsList = ({ friends }) => {

  return (
    <ul>
      {friends.map(friend => (
        <FriendListItem
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
