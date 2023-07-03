import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Basket from "../Basket/Basket";

import { useEffect, useState } from "react";
import { setSearchKey } from "../../store/products";
import UserDropdown from "../Auth/UserDropdown";

export default function Header() {
  const { items } = useSelector((state) => state.basket);
  const { user } = useSelector((state) => state.auth);
  const [showBasket, setShowBasket] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showUserDrop, setShowUserDrop] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const showBasketHandler = () => {
    setShowBasket(!showBasket);
    showUserDrop ? setShowUserDrop(false) : true;
  };
  const showUserDropHandler = () => {
    setShowUserDrop(!showUserDrop);
    showBasket ? setShowBasket(false) : true;
  };
  useEffect(() => {
    setShowBasket(false);
    setShowUserDrop(false);
  }, [location]);
  useEffect(() => {
    if (location.pathname === "/register" || location.pathname === "/login") {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [location]);

  const searchHandler = (e) => {
    setSearchKey(e.target.value);
    dispatch(setSearchKey(e.target.value));
  };

  return (
    <>
      {showHeader && (
        <header className="bg-indigo-700 fixed top-0 w-full z-[10] text-white py-3 px-5 sm:px-20">
          <div className="container mx-auto">
            <nav className="flex justify-between  items-center ">
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
                    location.pathname === "/"
                      ? "text-white"
                      : "text-neutral-300"
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
              <div className="relative  flex space-x-4">
                {user ? (
                  <>
                    <i
                      onClick={showUserDropHandler}
                      className="hover:cursor-pointer  text-neutral-300 transition-all duration-300 hover:text-neutral-50  fa-solid fa-user text-2xl"
                    ></i>
                    {showUserDrop && <UserDropdown user={user} />}
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="hover:cursor-pointer  text-neutral-300 transition-all duration-300 hover:text-neutral-50   text-2xl fa-solid fa-arrow-right-from-bracket"
                  ></Link>
                )}

                <i
                  onClick={showBasketHandler}
                  className={`hover:cursor-pointer   text-neutral-300 transition-all duration-300 hover:text-neutral-50 fa-solid fa-cart-shopping text-2xl ${
                    showBasket ? "text-white" : "text-neutral-50"
                  }`}
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
      )}
    </>
  );
}
