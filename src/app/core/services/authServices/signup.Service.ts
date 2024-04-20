import { ICustomerSignUp } from '../../models/customer.signup';
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
      const storage = new StorageService();
      storage.set('token', response.token);
      //   storage.set('email', response.email);
      //   storage.set('userName', response.unique_name);
      return Boolean(response.token);
    });
};
