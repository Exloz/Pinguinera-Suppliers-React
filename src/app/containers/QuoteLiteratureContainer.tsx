import { Modal } from '../ui/components/ModalQuote';
import { useLiteratureEditor } from '../core/hooks/useLiteratureEditor';

import LiteratureTable from '../ui/components/LiteratureTable';

export const SelectedLiteratureEditor = () => {
  const {
    state,
    quantities,
    isModalOpen,
    modalContent,
    handleQuantityChange,
    handleSubmit,
    closeModal,
  } = useLiteratureEditor();

  return (
    <>
      <LiteratureTable
        state={state}
        quantities={quantities}
        handleQuantityChange={handleQuantityChange}
      />
      <button className='literature-table__submit-btn' onClick={handleSubmit}>
        Request Quote
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title='Result of the quotation'>
        <p>{modalContent}</p>
      </Modal>
    </>
  );
};
