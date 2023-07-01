import Home from "../views/Home";
import About from "../views/About";
import Cart from "../views/Cart";

let routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    children: [],
  },
  {
    path: "/about",
    name: "About",
    element: <About />,
    children: [],
  },
  {
    path: "/cart",
    name: "Cart",
    element: <Cart />,
    children: [],
  },
];
export default routes;
