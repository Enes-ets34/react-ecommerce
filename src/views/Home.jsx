import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCategories } from "../store/category";
import { setProducts, setFilteredProducts } from "../store/products";

import appAxios from "../utils/appAxios";

import ProductsList from "../components/Product/ProductsList";
import CategoryList from "../components/Category/CategoryList";

export default function Home() {
  const dispatch = useDispatch();


  const { activeCategory } = useSelector((state) => state.category);

  useEffect(() => {
    appAxios
      .get(`categories.json`)
      .then((res) => {
        dispatch(setCategories(res.data.categories));
      })
      .catch((err) => {
        console.error(err);
      });
    appAxios
      .get(`products.json`)
      .then((res) => {
        dispatch(setProducts(res.data.products));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    if (activeCategory) {
      dispatch(setFilteredProducts(activeCategory));
    }
  }, [activeCategory]);

  return (
    <>
      <div className="container mt-24  px-12">
        <div className="flex flex-col md:flex-row justify-between items-start sm:space-x-4  ">
          <div className="sm:w-1/6 w-full border  flex flex-col rounded-lg border-indigo-300  shadow-md shadow-indigo-100">
            <h3 className="text-lg font-semibold text-center bg-indigo-50  border-indigo-500 py-1 rounded-t-md">
              Kategoriler
            </h3>
            <CategoryList />
          </div>

          <ProductsList />
        </div>
      </div>
    </>
  );
}
