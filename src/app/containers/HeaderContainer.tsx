import { ReactElement } from 'react';
import { Header } from '../ui/components/Header';
import { StorageService } from '../core/services/general/storage.service';

export const HeaderContainer = (): ReactElement => {
  const storage = new StorageService();
  const user = storage.get('userName');

  return <Header userName={user} />;
};
