import { Link } from "react-router-dom";

export default function Header() {
  
  return (
    <>
      <header className="bg-indigo-700  text-white py-3 px-5 sm:px-20">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center ">
            <div className="flex space-x-2 justify-between items-center">
              <i className="fa-brands fa-react text-5xl "></i>
              <input
                type="text"
                className="text-indigo-700 py-1 px-2 focus:outline-none rounded-lg"
              />
            </div>
            <ul className="hidden sm:flex  justify-between sm:space-x-6 space-x-2 items-center">
              <Link
                to="/"
                className="hover:cursor-pointer transition-all duration-300 hover:text-indigo-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:cursor-pointer transition-all duration-300 hover:text-indigo-200"
              >
                About
              </Link>
              <Link className="hover:cursor-pointer transition-all duration-300 hover:text-indigo-200">
                Contact
              </Link>
            </ul>
            <div className="">
              <i className="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
