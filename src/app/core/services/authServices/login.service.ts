import { jwtDecode } from 'jwt-decode';
import { ICustomerLogin } from '../../models/customer-login';
import { IJwtPayload } from '../../models/jwt-payload';
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
      const decoded: IJwtPayload = jwtDecode(response.token);
      const storage = new StorageService();
      storage.set('token', response.token);
      storage.set('email', decoded.email);
      storage.set('userName', decoded.unique_name);
      storage.set('exp', decoded.exp);
      return Boolean(response.token);
    });
};
