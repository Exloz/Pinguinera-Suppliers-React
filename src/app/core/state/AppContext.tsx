import { createContext, ReactElement, ReactNode, useReducer } from 'react';
import { ILiteratureCopy } from '../models/literature-copy';

export const initialState: IState = {
  isCustomerLogged: false,
  literatureList: [],
};

interface IAppContext {
  state: IState;
  dispatch: any;
}

export const AppContext = createContext<IAppContext>({ state: initialState, dispatch: null });

interface IAppProviderProps {
  children: ReactNode;
}

interface IState {
  isCustomerLogged: boolean;
  literatureList: ILiteratureCopy[];
}

interface IAction {
  type: string;
  payload?: any;
}

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'USER_LOGGED':
      return { ...state, isCustomerLogged: true };
    case 'CUSTOMERS_GOTTEN':
      return { ...state, literatureList: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }: IAppProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
