import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function Basket() {
  const { items } = useSelector((state) => state.basket);
  return (
    <>
      <div className="z-10 absolute w-52 top-12 right-0 text-black  drop-shadow-xl bg-white p-4 rounded-md rounded-tr-none ring-1">
        <h3 className="font-semibold border-b border-indigo-300">
          Sepetim ({items.length})
        </h3>
        <ul
          className={`text-sm space-y-2  ${
            items.length > 0 ? "border-b" : ""
          } py-2 border-indigo-300 `}
        >
          {items.map((item) => (
            <li
              className="flex justify-start space-x-2 items-start"
              key={item.id}
            >
              <div className="w-20 max-w-20 max-h-20  h-20 border rounded-md ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain rounded-md w-20 h-20 max-h-20 max-w-20 "
                />
              </div>
              <div className="flex justify-start items-start space-y-2 flex-col">
                <span className="font-semibold">{item.title}</span>
                <span className="text-xs  text-gray-500">Adet: {item.qty}</span>
                <span className="text-xs  text-green-500"> {item.price} $</span>
              </div>
            </li>
          ))}
        </ul>
        {items.length > 0 && (
          <Link to="/cart">
            <button className="w-full border rounded-md mt-1 text-sm font-light text-gray-700 hover:border-black hover:text-black transition-all duration-300 active:bg-neutral-100 active:text-opacity-70 active:border-opacity-50 ">
              Sepete Git
            </button>
          </Link>
        )}
      </div>
    </>
  );
}
