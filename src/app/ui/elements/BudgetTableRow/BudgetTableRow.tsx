import React from 'react';

const BudgetTableRow = ({ copy }) => {
  return (
    <tr className='budget-table__row'>
      <td className='budget-table__data'>{copy.title}</td>
      <td className='budget-table__data'>{copy.type === 0 ? 'Book' : 'Novel'}</td>
      <td className='budget-table__data'>{copy.grossPrice}</td>
    </tr>
  );
};

export default BudgetTableRow;
