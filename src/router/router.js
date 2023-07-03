import Home from "../views/Home";
import About from "../views/About";
import Cart from "../views/Cart";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import NotFound from "../views/NotFound";

let routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about",
    name: "About",
    element: <About />,
  },
  {
    path: "/cart",
    name: "Cart",
    element: <Cart />,
    auth: true,
  },
  {
    path: "/login",
    name: "Login",
    element: <Login />,
  },
  {
    path: "/register",
    name: "Register",
    element: <Register />,
  },
];
const mapAuth = (routes) => {
  return routes.map((route) => {
    console.log('route :>> ', route);
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }

    return route;
  });
};

routes = mapAuth(routes);

export default routes;

