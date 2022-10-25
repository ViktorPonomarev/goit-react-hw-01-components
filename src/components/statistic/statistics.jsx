import PropTypes from 'prop-types';
import css from 'components/statistic/statistics.module.css';
import { getRandomHexColor } from 'utils/randomColor';

export const StatisticsList = ({ items, title }) => {
  return (<div className ={css.statisticContainer}>
    {title && <h2 className = {css.statTitle}>{title}</h2>}
    <ul className={css.statisticsList}>
      {items.map(item => (
        <li
          className={css.itemStatisticsList}
          key={item.id}
          style={{
            backgroundColor: getRandomHexColor(),
          }}
        >
          <span className={css.labelStatisticsList}>{item.label}: </span>
          <span className={css.percentageStatisticsList}>
            {item.percentage}%
          </span>
        </li>
      ))}
    </ul>
    </div>
  );
};

StatisticsList.prototype = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  title: PropTypes.string,
};
