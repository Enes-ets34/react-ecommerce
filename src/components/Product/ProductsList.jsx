import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

export default function ProductsList() {
  const { products, searchKey } = useSelector((state) => state.products);
  const { activeCategory } = useSelector((state) => state.category);

  const displayedProducts = activeCategory
    ? products.filter((p) => p.categoryId === activeCategory && p.title.toLowerCase().includes(searchKey.toLowerCase()))
    : products.filter((p) => p.title.toLowerCase().includes(searchKey.toLowerCase()));

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

