export const SelectedBooksTable = ({ selectedCopies, onUpdateQuantity }) => {
  const handleChange = (copyId, newQuantity) => {
    onUpdateQuantity(copyId, newQuantity);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Cantidad</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(selectedCopies).map((copyId) => (
          <tr key={copyId}>
            <td>{selectedCopies[copyId].title}</td>
            <td>
              <input
                type='number'
                value={selectedCopies[copyId].quantity}
                onChange={(e) => handleChange(copyId, parseInt(e.target.value))}
                min='1'
              />
            </td>
            <td>
              <button onClick={() => onUpdateQuantity(copyId, 0)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
