import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../../store/category";

export default function CategoryItem({ category }) {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.category.activeCategory);
  const isActive = activeCategory === category.id; // Etkin kategori kontrolü

  const categoryHandle = () => {
    dispatch(setActiveCategory(category.id));
  };
  return (
    <>
      <li
        onClick={categoryHandle}
        className={`border-t ${
          isActive
            ? "bg-indigo-500 text-white hover:bg-indigo-400"
            : "hover:bg-indigo-200"
        } cursor-pointer transition-all duration-300 text-black ${
          isActive ? "active:bg-indigo-300" : "border-indigo-500"
        } py-1 px-2`}
      >
        # {category.title}
      </li>
    </>
  );
}
