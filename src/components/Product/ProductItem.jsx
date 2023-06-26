// ProductItem.jsx

import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/basket";
import { useEffect, useMemo } from "react";

export default function ProductItem({ product }) {
  const { items } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const existingProduct = useMemo(
    () => items.find((p) => p.id === product.id),
    [items, product.id]
  );

  const addBasket = () => {
    if (existingProduct) {
      dispatch(addItem({ ...existingProduct, qty: existingProduct.qty + 1 }));
    } else {
      dispatch(addItem({ ...product, qty: 1 }));
    }
  };

  const decreaseQty = () => {
    if (existingProduct && existingProduct.qty > 0) {
      dispatch(removeItem(existingProduct));
    }
  };

  const increaseQty = () => {
    dispatch(addItem({ ...existingProduct, qty: existingProduct.qty + 1 }));
  };

  const hasAlreadyBasket = useMemo(
    () => Boolean(existingProduct),
    [existingProduct]
  );

  const qty = useMemo(() => {
    return existingProduct ? existingProduct.qty : 0;
  }, [existingProduct]);

  return (
    <>
      <div className="w-full sm:w-1/4 p-1 self-stretch">
        <div className="border flex flex-col rounded-lg border-indigo-300 shadow-md h-full shadow-indigo-100">
          <img
            src={product.image}
            alt=""
            className="rounded-t-md w-full max-h-64 object-contain"
          />
          <div className="px-4 py-2 mb-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl text-indigo-800">{product.title}</h3>
              <h3 className="text-xs rounded-full bg-indigo-400 text-white px-2 text-center">
                {product.category}
              </h3>
            </div>
            <span className="text-green-600">$ {product.price}</span>
            {JSON.stringify(hasAlreadyBasket)}
          </div>

          {!hasAlreadyBasket && (
            <div className="px-4 py-2 mt-auto border-t-2 flex justify-center items-center">
              <button
                onClick={addBasket}
                className="bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 rounded-lg px-4 py-0 text-white"
              >
                sepete ekle
              </button>
            </div>
          )}
          {hasAlreadyBasket && (
            <div className="px-4 py-2 mt-auto border-t-2 flex justify-center items-center">
              <button
                onClick={decreaseQty}
                disabled={qty === 0}
                className="bg-red-600 disabled:bg-red-300 hover:bg-red-500 transition-all duration-300 rounded-l-md px-4 py-0 text-white"
              >
                -
              </button>
              <span className="px-4">{qty}</span>
              <button
                onClick={increaseQty}
                className="bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 rounded-r-md px-4 py-0 text-white"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
