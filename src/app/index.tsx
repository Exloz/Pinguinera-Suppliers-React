import { ReactElement } from 'react';
import { Guard } from './routes/Guard';
import { router } from './routes/router';

export const App = (): ReactElement => {
  return (
    <AppProvider>
      <Guard children={router} />
    </AppProvider>
  );
};
