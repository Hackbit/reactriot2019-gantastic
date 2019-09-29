export const Routes = {
  AUTH: '/auth',
  FACES: '/faces',
  HISTORY: '/history',
  HOME: '/',
  LOGOUT: '/logout',
};

export const authRoutes = [
  { name: 'Home', label: 'Home', to: Routes.HOME },
  { name: 'Faces', label: 'Generator', to: Routes.FACES },
  // { name: 'History', label: 'History', to: Routes.HISTORY },
  { name: 'Logout', label: 'Logout', to: Routes.LOGOUT },
];

export const anonRoutes = [
  { name: 'Home', label: 'Home', to: Routes.HOME },
  { name: 'Login', label: 'Login', to: Routes.AUTH },
];
