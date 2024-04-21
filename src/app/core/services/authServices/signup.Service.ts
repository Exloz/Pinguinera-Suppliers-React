import { jwtDecode } from 'jwt-decode';
import { ICustomerSignUp } from '../../models/customer.signup';
import { IJwtPayload } from '../../models/jwt-payload';
import { urls } from '../../resources/url.resource';
import http from '../general/http.service';
import { StorageService } from '../general/storage.service';

export const signUpService = (singUpCredentials: ICustomerSignUp): Promise<boolean> => {
  const url = urls.signUp;
  const body = singUpCredentials;

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
