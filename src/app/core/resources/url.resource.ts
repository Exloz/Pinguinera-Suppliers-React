import { enviroment } from '../../../environment/environment';

export const urls = {
  login: `${enviroment.apiUrl}/Customer/LoginCustomer`,
  signUp: `${enviroment.apiUrl}/Customer/RegisterCustomer`,

  allLiterature: `${enviroment.apiUrl}/Literature/GetAllLiteratureList`,

  calculateUnit: `${enviroment.apiUrl}/Supplier/GetAllLiteratureList`,
  calculateQuote: `${enviroment.apiUrl}/Supplier/GetAllLiteratureList`,
  calculateBudget: `${enviroment.apiUrl}/Supplier/GetAllLiteratureList`,
};
