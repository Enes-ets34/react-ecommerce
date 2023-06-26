import CategoryItem from "./CategoryItem";

import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../../store/category";

export default function CategoryList() {
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.category.activeCategory);

  const categoryHandle = () => {
    dispatch(setActiveCategory(null));
  };
  return (
    <>
      <ul>
        <li
          onClick={categoryHandle}
          className={`border-t ${
            !activeCategory
              ? "bg-indigo-500 text-white hover:bg-indigo-400"
              : "hover:bg-indigo-200"
          } cursor-pointer transition-all duration-300 text-black ${
            activeCategory ? "active:bg-indigo-300" : "border-indigo-500"
          } py-1 px-2`}
        >
          # Tüm Ürünler
        </li>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </ul>
    </>
  );
}
