import { createHashRouter } from 'react-router-dom';
import { LayoutAuth } from '../ui/layouts/LayoutAuth';
import { LayoutMain } from '../ui/layouts/LayoutMain';
import { Component } from 'react';
import { Guard } from './Guard';

import { LoginPage } from '../pages/LoginPage';
import { SignUpPage } from '../pages/SignUpPage';
import { CreateLiteraturePage } from '../pages/CreatePage';
import { SelectedLiteratureEditor } from '../containers/QuoteLiteratureContainer';

//aqui se agregan las pages

export const router = createHashRouter([
  {
    path: '*',
    Component: LoginPage,
  },
  {
    path: '',
    Component: LayoutAuth,
    children: [
      {
        path: 'login',
        Component: LoginPage,
      },
      {
        path: 'signup',
        Component: SignUpPage,
      },
    ],
  },
  {
    path: 'home',
    element: (
      <Guard>
        <LayoutMain />
      </Guard>
    ),
    children: [
      {
        path: 'save-literature',
        element: (
          <Guard>
            <CreateLiteraturePage />
          </Guard>
        ),
      },
      {
        path: 'quote-literature',
        element: (
          <Guard>
            <SelectedLiteratureEditor />
          </Guard>
        ),
      },
      //   {
      //     path: 'budget-literature',
      //     element: (
      //       <Guard>
      //         <BudgetLiterature />
      //       </Guard>
      //     ),
      //   },
    ],
  },
]);
