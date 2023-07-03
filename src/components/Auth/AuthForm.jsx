import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUserAction } from "../../store/auth";

export default function AuthForm({ type }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const user = {
      email,
      password,
    };
    dispatch(setUserAction(user));
    navigate("/");
  };

  return (
    <div className="container mt-24 px-12">
      <div className="w-full sm:w-1/2 mx-auto">
        <div className="border flex flex-col rounded-md shadow-xl">
          <div className="py-2 rounded-t-md bg-neutral-50 px-16 border-b">
            <h3 className="text-2xl font-semibold">{type}</h3>
          </div>
          <div className="flex flex-col space-y-2 px-16 py-8">
            <div className="flex flex-col">
              <label className="text-sm my-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-none outline-none focus:ring focus:ring-indigo-300 ring-1 rounded-sm px-2 py-0.5"
                placeholder="react@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm my-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border-none outline-none focus:ring focus:ring-indigo-300 ring-1 rounded-sm px-2 py-0.5"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="px-8 bg-neutral-50 text-center border-t py-4">
            <button
              className="w-full sm:w-1/2 text-xl text-white rounded-md hover:bg-indigo-400 transition-all duration-300 active:bg-indigo-700 bg-indigo-600 font-semibold"
              onClick={handleSubmit}
            >
              {type}
            </button>
          </div>
        </div>
        {type === "Register" ? (
          <p className="mt-5 text-center">
            Zaten hesabınız var mı?
            <Link to="/login" className="text-indigo-600">
              Hemen oturum açın
            </Link>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Henüz hesabınız yok mu ?
            <Link to="/register" className="text-indigo-600">
              Hemen üye olun
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
