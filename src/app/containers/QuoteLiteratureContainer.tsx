import { useContext, useState } from 'react';
import { AppContext } from '../core/state/AppContext';
import { quoteService } from '../core/services/supplierServices/quoteLiterature.service';
import { ModalQuote } from '../ui/components/ModalQuote';

export const SelectedLiteratureEditor = () => {
  const { state, dispatch } = useContext(AppContext);
  const [quantities, setQuantities] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleQuantityChange = (copyId, quantity) => {
    setQuantities({ ...quantities, [copyId]: quantity });
  };

  const handleSubmit = async () => {
    const literatureQuantityList = {
      copies: Object.keys(quantities).map((copyId) => ({
        copyId: parseInt(copyId),
        quantity: quantities[copyId],
      })),
    };

    try {
      const quoteDetails = await quoteService(literatureQuantityList);
      setModalContent(`Detalles de la Cotización: ${JSON.stringify(quoteDetails)}`);
      setModalOpen(true);
    } catch (error) {
      console.error('Error al obtener la cotización:', error);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Tipo</th>
            <th>Precio Bruto</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(state.selectedLiterature)
            .filter((copyId) => state.selectedLiterature[copyId])
            .map((copyId) => {
              const copy = state.literatureList.find(
                (l) => l.literatureCopyId === parseInt(copyId)
              );
              return (
                <tr key={copyId}>
                  <td>{copy.title}</td>
                  <td>{copy.type === 0 ? 'Libro' : 'Novela'}</td>
                  <td>{copy.grossPrice}</td>
                  <td>
                    <input
                      type='number'
                      value={quantities[copyId] || 0}
                      onChange={(e) => handleQuantityChange(copyId, parseInt(e.target.value))}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Enviar Cantidades</button>
      <ModalQuote
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title='Resultado de la Cotización'>
        <p>{modalContent}</p>
      </ModalQuote>
    </>
  );
};
