import { ICustomerLogin } from '../../models/customer-login';
import { urls } from '../../resources/url.resource';
import http from '../general/http.service';
import { StorageService } from '../general/storage.service';

export const loginService = (loginCredentials: ICustomerLogin): Promise<boolean> => {
  const url = urls.login;
  const body = loginCredentials;

  return http
    .post(url, body)
    .then((response) => response.json())
    .then((response) => {
      const storage = new StorageService();
      storage.set('token', response.token);
      //   storage.set('email', response.email);
      //   storage.set('userName', response.unique_name);
      return Boolean(response.token);
    });
};
