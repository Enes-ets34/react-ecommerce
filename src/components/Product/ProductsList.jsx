import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

export default function ProductsList() {
  const { products, filteredProducts } = useSelector((state) => state.products);
  const { activeCategory } = useSelector((state) => state.category);

  const displayedProducts = activeCategory ? filteredProducts : products;

  return (
    <div className="flex justify-start w-full sm:w-5/6 items-start h-full flex-wrap">
      {displayedProducts.length === 0 ? (
        <p>Hata! Ürün bulunamadı.</p>
      ) : (
        displayedProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))
      )}
   
  
    </div>
  );
}
