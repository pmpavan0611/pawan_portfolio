import Home from "../pages/Home"
import Login from "../pages/Login"

const PublicRoutes = [
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/home', exact: true, name: 'home', component: Home },
  // { path: '/account-recovery/initiate', name: 'Forgot', exact: true, component: RecoverPassword },
  // { path: '/account-recovery/submit', name: 'Reset', exact: true, component: UpdatePassword },
  // { path: '/register', name: 'SignUp', exact: true, component: SignUp },
]
export default PublicRoutes