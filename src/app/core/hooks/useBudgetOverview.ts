import { useState, useContext } from 'react';
import { AppContext } from '../state/AppContext';
import { budgetService } from '../services/supplierServices/budgedOptimization.service';
import { formatBudgetDetails } from '../models/Modal';



export const useBudgetOverview = () => {
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
      const formattedDetails = formatBudgetDetails(budgetDetails, state.literatureList);
      setModalContent(formattedDetails);
      setModalOpen(true);
    } catch (error) {
      console.error('Error:', error);
      setModalContent('Something went wrong, try again carefully');
      setModalOpen(true);
    }
  };

  return {
    state,
    budget,
    isModalOpen,
    modalContent,
    setBudget,
    handleSubmit,
    closeModal: () => setModalOpen(false),
  };
};
