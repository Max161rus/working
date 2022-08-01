import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

const auth = [
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/register',
    component: Register
  }
];

export default auth;
