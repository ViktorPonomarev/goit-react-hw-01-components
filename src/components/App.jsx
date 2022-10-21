import { Profile } from "./profile/profile";
import user from 'components/profile/user.json';
import css from './appContainer.module.css'

export const App = () => {
  return (
    <div className={css.appContainer}>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
    </div>
  );
};
    
