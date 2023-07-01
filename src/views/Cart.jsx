import CartItem from "../components/Cart/CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const { items } = useSelector((state) => state.basket);

  const totalAmount = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <div className="container mt-24  sm:px-12 px-6">
      <div className="flex flex-col  sm:flex-row justify-between space-x-4 items-start">
        {items.length > 0 ? (
          <>
            <div className="flex w-full sm:w-3/4 space-y-2 flex-col ">
              {items.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
            </div>
            <div className="sm:w-1/4 border rounded-md   w-full px-4 py-2">
              <h3 className="font-semibold text-lg border-b">Sipariş Özeti</h3>
              <div className="flex mt-2 text-sm flex-col">
                <div className="flex justify-between items-center">
                  Ürünlerin adeti:{" "}
                  <span>
                    {items.reduce((totalQty, item) => totalQty + item.qty, 0)}{" "}
                    adet
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  Ürünün toplamı: <span>{totalAmount}$</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>sepetiniz boş.</div>
        )}
      </div>
    </div>
  );
}
