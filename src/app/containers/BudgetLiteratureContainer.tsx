import { Modal } from '../ui/components/ModalQuote';
import { useBudgetOverview } from '../core/hooks/useBudgetOverview';
import BudgetTable from '../ui/components/BudgedTable';

export const BudgetOverviewEditor = () => {
  const { state, budget, isModalOpen, modalContent, setBudget, handleSubmit, closeModal } =
    useBudgetOverview();

  return (
    <section className='budget'>
      <h1 className='budget-title'>Select copies and a budget to calculate!</h1>
      <BudgetTable
        selectedLiterature={state.selectedLiterature}
        literatureList={state.literatureList}
      />
      <div>
        <label>
          Budget:
          <input
            type='number'
            className='budget-table__input'
            value={budget}
            onChange={(e) => setBudget(parseFloat(e.target.value))}
            min='0'
            required
          />
        </label>
        <button className='budget-table__submit-btn' onClick={handleSubmit}>
          Calculate
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title='Budget Result'>
        <div dangerouslySetInnerHTML={{ __html: modalContent }} />
      </Modal>
    </section>
  );
};
