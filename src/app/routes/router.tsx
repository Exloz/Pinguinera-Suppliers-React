import { createHashRouter } from 'react-router-dom';
import { LayoutAuth } from '../ui/layouts/LayoutAuth';
import { LayoutMain } from '../ui/layouts/LayoutMain';
import { Component } from 'react';
import { Guard } from './Guard';

import { LoginPage } from '../pages/LoginPage';
import { SignUpPage } from '../pages/SignUpPage';

//aqui se agregan las pages

export const router = createHashRouter([
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
    Component: LayoutMain,
    children: [
      {
        path: 'save-literature',
        element: (
          <Guard>
            <h1>save literature page</h1>
          </Guard>
        ),
      },
      //   {
      //     path: 'quote-literature',
      //     element: (
      //       <Guard>
      //         <QuoteLiterature />
      //       </Guard>
      //     ),
      //   },
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
