import { useState, useContext } from 'react';
import { AppContext } from '../state/AppContext';
import { quoteService } from '../services/supplierServices/quoteLiterature.service';
import { formatQuoteDetails } from '../models/Modal';

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
      const formattedDetails = formatQuoteDetails(quoteDetails);
      setModalContent(formattedDetails);
      setModalOpen(true);
    } catch (error) {
      setModalContent('Something went wrong, try again carefully');
      setModalOpen(true);
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
