import { ReactElement } from 'react';
import { router } from './routes/router';
import { AppProvider } from './core/state/AppContext';
import { RouterProvider } from 'react-router-dom';

export const App = (): ReactElement => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};
