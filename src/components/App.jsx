import {Profile} from 'components/profile/profile';
import user from 'components/profile/user.json';
import {StatSection} from 'components/statistic/statSection';
import {FriendsList} from 'components/friendsList/friendsList'
import friends from 'components/friendsList/friends.json';
import {Transaction} from 'components/Transaction/transaction';
import transactions from 'components/Transaction/transactions.json';
import css from './appContainer.module.css'

export const App = () => {
  return (
    <div className={css.appContainer}
     
    >
      <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
      />
      <StatSection />
      <FriendsList
        friends={friends} />
      <Transaction
        items={transactions} />
    </div>
  );
};

