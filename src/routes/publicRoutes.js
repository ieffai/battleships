import { Home, Contacts, About } from '../pages';

import { HOME_ROUTE, CONTACTS_ROUTE, ABOUT_ROUTE } from '../utils/constants';

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
];
