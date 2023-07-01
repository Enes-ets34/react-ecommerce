import { useDispatch } from "react-redux";
import { addItem, removeItem, deleteItem } from "../../store/basket";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(addItem({ ...item, qty: item.qty + 1 }));
  };
  const decreaseHandler = () => {
    dispatch(removeItem(item));
  };
  const deleteItemHandler = () => {
    dispatch(deleteItem(item));
  };
  return (
    <>
      <div
        key={item.id}
        className=" border p-1 flex justify-start space-x-8 items-center bg-white drop-shadow-sm rounded-md"
      >
        <div className="h-32 w-32 flex  items-center justify-center">
          <img
            src={item.image}
            className="max-w-32 max-h-32 overflow-hidden  object-contain"
            alt=""
          />
        </div>
        <div className="flex w-full pr-2 justify-between items-center">
          <div className="flex flex-col">
            <span className="font-semibold">{item.title}</span>
            <span className="text-sm  text-green-500">${item.price}</span>
          </div>
          <div className=" flex justify-start space-x-12 items-center">
            <div className="flex justify-between items-center p-0 border rounded-md ">
              <button
                onClick={decreaseHandler}
                disabled={item.qty === 1}
                className=" p-2 transition-all disabled:bg-slate-50 disabled:bg-opacity-75 duration-300 active:bg-gray-400 bg-neutral-200 hover:bg-gray-300 rounded-l-md"
              >
                -
              </button>
              <small className=" p-2 text-center">{item.qty}</small>
              <button
                onClick={increaseHandler}
                className="p-2  transition-all duration-300 active:bg-gray-400 bg-neutral-200 hover:bg-gray-300 rounded-r-md"
              >
                +
              </button>
            </div>
            <div className="text-green-500">${item.price * item.qty}</div>
            <button onClick={deleteItemHandler} className="p-2">
              <i className="fa p-2 fa-trash text-red-500 font-semibold hover:cursor-pointer hover:bg-red-400 transition-all duration-300 hover:text-white hover:rounded-full"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
