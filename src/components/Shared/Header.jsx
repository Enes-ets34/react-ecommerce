import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Basket from "../Basket/Basket";
import { useEffect, useState } from "react";
import { setSearchKey } from "../../store/products";

export default function Header() {
  const { items } = useSelector((state) => state.basket);
  const [showBasket, setShowBasket] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const showBasketHandler = () => {
    setShowBasket(!showBasket);
  };
  useEffect(() => {
    setShowBasket(false);
  }, [location]);
  const searchHandler = (e) => {
    setSearchKey(e.target.value);
    dispatch(setSearchKey(e.target.value));
  };
  return (
    <>
      <header className="bg-indigo-700 fixed top-0 w-full z-[10] text-white py-3 px-5 sm:px-20">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center ">
            <div className="flex space-x-2 justify-between items-center">
              <i className="fa-brands fa-react text-5xl "></i>
              <input
                type="text"
                onChange={searchHandler}
                className="text-indigo-700 py-1 px-2 focus:outline-none rounded-lg"
              />
            </div>
            <ul className="hidden sm:flex  justify-between sm:space-x-6 space-x-2 items-center">
              <Link
                to="/"
                className={`hover:cursor-pointer transition-all hover:text-neutral-50 duration-300 ${
                  location.pathname === "/" ? "text-white" : "text-neutral-300"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`hover:cursor-pointer hover:text-neutral-50 transition-all duration-300 ${
                  location.pathname === "/about"
                    ? "text-white"
                    : "text-neutral-300"
                }`}
              >
                About
              </Link>
              <Link className="hover:cursor-pointer text-neutral-300 transition-all duration-300 hover:text-neutral-50">
                Contact
              </Link>
            </ul>
            <div className="relative ">
              <i
                onClick={showBasketHandler}
                className="hover:cursor-pointer fa-solid fa-cart-shopping text-2xl"
              ></i>
              {items.length > 0 && (
                <small className="absolute top-0.25 left-5 bg-white rounded-full text-xs text-black border p-0 text-center px-1 border-black">
                  {items.length}
                </small>
              )}

              {showBasket && <Basket />}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
