export const Routes = {
  AUTH: '/auth',
  FACES: '/faces',
  HISTORY: '/history',
  HOME: '/',
  LOGOUT: '/logout',
};

export const authRoutes = [
  { name: 'Faces', label: 'Faces', to: Routes.FACES },
  { name: 'History', label: 'History', to: Routes.HISTORY },
  { name: 'Logout', label: 'Logout', to: Routes.LOGOUT },
];

export const anonRoutes = [
  { name: 'Login', label: 'Login', to: Routes.AUTH },
];
