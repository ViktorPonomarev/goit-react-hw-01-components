import PropTypes from 'prop-types';
import css from 'components/Transaction/transaction.module.css';

export const Transaction = ({items}) => {
  return <table className={css.transaction}>
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item, index) => (
      <tr key={item.id} style={{
        backgroundColor: index % 2 === 0 ? 'antiquewhite' : 'white'
      }}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
    ))}
  </tbody>
      </table>
}

Transaction.prototype = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}



