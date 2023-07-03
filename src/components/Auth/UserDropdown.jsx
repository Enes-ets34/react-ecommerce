import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../store/auth";
import { clearItems } from "../../store/basket";
export default function UserDropdown({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(clearItems());
    navigate("/");
  };
  return (
    <>
      <div className="z-10 absolute w-52 top-12 right-10 text-black  drop-shadow-xl bg-white p-4 rounded-md rounded-tr-none ring-1">
        <h3 className="font-semibold border-b border-indigo-300">
          {user.email}
        </h3>

        <button
          onClick={logoutHandler}
          className="w-full border rounded-md mt-1 text-sm font-light text-gray-700 hover:border-black hover:text-black transition-all duration-300 active:bg-neutral-100 active:text-opacity-70 active:border-opacity-50 "
        >
          Çıkış yap
        </button>
      </div>
    </>
  );
}
