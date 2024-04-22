import React from 'react';
import LiteratureTableRow from '../../elements/LiteratureTableRow/LiteratureTableRow';

const LiteratureTable = ({ state, quantities, handleQuantityChange }) => {
  return (
    <table className='literature-table'>
      <thead className='literature-table__head'>
        <tr className='literature-table__row'>
          <th className='literature-table__header'>Title</th>
          <th className='literature-table__header'>Type</th>
          <th className='literature-table__header'>Gross Price</th>
          <th className='literature-table__header'>Quantity</th>
        </tr>
      </thead>
      <tbody className='literature-table__body'>
        {Object.keys(state.selectedLiterature)
          .filter((copyId) => state.selectedLiterature[copyId])
          .map((copyId) => {
            const copy = state.literatureList.find((l) => l.literatureCopyId === parseInt(copyId));
            return (
              <LiteratureTableRow
                key={copyId}
                copy={copy}
                quantity={quantities[copyId]}
                handleQuantityChange={handleQuantityChange}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default LiteratureTable;
