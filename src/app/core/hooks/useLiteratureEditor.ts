import { useState, useContext } from 'react';
import { AppContext } from '../state/AppContext';
import { quoteService } from '../services/supplierServices/quoteLiterature.service';

export const useLiteratureEditor = () => {
  const { state } = useContext(AppContext);
  const [quantities, setQuantities] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleQuantityChange = (copyId, quantity) => {
    setQuantities((prev) => ({ ...prev, [copyId]: quantity }));
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
      setModalContent(`Quote Details: ${JSON.stringify(quoteDetails)}`);
      setModalOpen(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return {
    state,
    quantities,
    isModalOpen,
    modalContent,
    handleQuantityChange,
    handleSubmit,
    closeModal: () => setModalOpen(false),
  };
};
