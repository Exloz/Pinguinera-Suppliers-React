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
    <section className='quote-container'>
      <h1>Select copies and quote their value!</h1>
      <LiteratureTable
        state={state}
        quantities={quantities}
        handleQuantityChange={handleQuantityChange}
      />
      <button className='literature-table__submit-btn' onClick={handleSubmit}>
        Request Quote
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title='Result of Quotation'>
        <div dangerouslySetInnerHTML={{ __html: modalContent }} />
      </Modal>
    </section>
  );
};
