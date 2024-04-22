import { IBudgetOverview } from '../../models/budget-optimization';
import { IBudgetDetails } from '../../models/budget-response';
import { urls } from '../../resources/url.resource';
import httpService from '../general/http.service';

export const budgetService = (budgetOverview: IBudgetOverview): Promise<IBudgetDetails> => {
  const url = urls.calculateBudget;
  const body = budgetOverview;

  console.log(JSON.stringify(budgetOverview));

  const response = httpService
    .post(url, body)
    .then((response) => response.json())
    .then((response) => response);

  return response;
};
