import { useContext, useState } from 'react';
import { budgetService } from '../core/services/supplierServices/budgedOptimization.service';
import { AppContext } from '../core/state/AppContext';
import { Modal } from '../ui/components/ModalQuote';

export const BudgetOverviewEditor = () => {
  const { state } = useContext(AppContext);
  const [budget, setBudget] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleSubmit = async () => {
    const selectedLiterature = Object.keys(state.selectedLiterature).filter(
      (copyId) => state.selectedLiterature[copyId]
    );

    const budgetOverview = {
      literatureCopies: selectedLiterature.map((copyId) => ({ copyId: parseInt(copyId) })),
      budget: budget,
    };

    try {
      const budgetDetails = await budgetService(budgetOverview);
      setModalContent(`Detalles del Presupuesto: ${JSON.stringify(budgetDetails)}`);
      setModalOpen(true);
    } catch (error) {
      setModalContent(`Error al calcular el presupuesto: ${error.message}`);
      setModalOpen(true);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Gross Price</th>
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
                </tr>
              );
            })}
        </tbody>
      </table>
      <div>
        <label>
          Presupuesto Total:
          <input
            type='number'
            value={budget}
            onChange={(e) => setBudget(parseFloat(e.target.value))}
            min='0'
          />
        </label>
        <button onClick={handleSubmit}>Calcular Presupuesto</button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title='Resultado del Presupuesto'>
        <p>{modalContent}</p>
      </Modal>
    </>
  );
};
