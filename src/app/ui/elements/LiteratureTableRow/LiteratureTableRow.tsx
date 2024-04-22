import React from 'react';

const LiteratureTableRow = ({ copy, quantity, handleQuantityChange }) => {
  return (
    <tr className='literature-table__row'>
      <td className='literature-table__data'>{copy.title}</td>
      <td className='literature-table__data'>{copy.type === 0 ? 'Book' : 'Novel'}</td>
      <td className='literature-table__data'>{copy.grossPrice}</td>
      <td className='literature-table__data'>
        <input
          className='literature-table__input'
          type='number'
          value={quantity || 1}
          onChange={(e) => handleQuantityChange(copy.literatureCopyId, parseInt(e.target.value))}
        />
      </td>
    </tr>
  );
};

export default LiteratureTableRow;
