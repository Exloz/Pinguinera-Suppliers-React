import React from 'react';
import BudgetTableRow from '../../elements/BudgetTableRow/BudgetTableRow';

const BudgetTable = ({ selectedLiterature, literatureList }) => {
  return (
    <table className='budget-table'>
      <thead className='budget-table__head'>
        <tr className='budget-table__row'>
          <th className='budget-table__header'>Title</th>
          <th className='budget-table__header'>Type</th>
          <th className='budget-table__header'>Gross Price</th>
        </tr>
      </thead>
      <tbody className='budget-table__body'>
        {Object.keys(selectedLiterature)
          .filter((copyId) => selectedLiterature[copyId])
          .map((copyId) => {
            const copy = literatureList.find((l) => l.literatureCopyId === parseInt(copyId));
            return <BudgetTableRow key={copyId} copy={copy} />;
          })}
      </tbody>
    </table>
  );
};

export default BudgetTable;
