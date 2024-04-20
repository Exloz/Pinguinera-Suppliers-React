import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  const [error, serError] = useState<string>();
  const { dispatch } = useContext(AppContext);
};
