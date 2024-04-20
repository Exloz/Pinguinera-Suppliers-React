import { createHashRouter } from 'react-router-dom';
import { LayoutAuth } from '../ui/layouts/LayoutAuth';
import { LayoutMain } from '../ui/layouts/LayoutMain';
import { Component } from 'react';
import { Guard } from './Guard';

//aqui se agregan las pages

export const router = createHashRouter([
  {
    path: '',
    Component: LayoutAuth,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'sign-up',
        Component: SignUp,
      },
    ],
  },
  {
    path: 'home',
    Component: LayoutMain,
    children: [
      {
        path: 'save-literature',
        element: (
          <Guard>
            <SaveLiterature />
          </Guard>
        ),
      },
      {
        path: 'quote-literature',
        element: (
          <Guard>
            <QuoteLiterature />
          </Guard>
        ),
      },
      {
        path: 'budget-literature',
        element: (
          <Guard>
            <BudgetLiterature />
          </Guard>
        ),
      },
    ],
  },
]);
