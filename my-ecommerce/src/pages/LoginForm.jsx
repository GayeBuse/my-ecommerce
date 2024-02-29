import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/actions/userAction/userAction";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    setLoading(true);
    dispatch(userLogin(data, history));
  };
  /* Bu kurulumla, form gönderildikten sonra userLogin eylem gönderilecek ve bu da "/login" uç noktasına API çağrısını tetikleyecek ve oturum açma işlemini buna göre gerçekleştirecektir.
   */

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto my-8 p-6 bg-white border rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="text"
          id="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className={`w-full px-3 py-2 border rounded ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-blue-500`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required" })}
          className={`w-full px-3 py-2 border rounded ${
            errors.password ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-blue-500`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
      <div className="flex justify-between">
        <div className="mb-4">
          <input
            type="checkbox"
            id="rememberMe"
            {...register("rememberMe")}
            className="mr-2 leading-tight"
          />

          <label htmlFor="rememberMe" className="text-sm">
            Remember me
          </label>
        </div>
        <div className="mb-4">
          <a href="/#" className="text-blue-500 text-sm">
            Forgot your password?
          </a>
        </div>
        <div className="mb-6"></div>
      </div>
      <div>
        <button
          type="submit"
          disabled={loading || !isValid}
          className={` mt-5 bg-blue-500 text-white font-bold py-2 px-4 rounded ${
            !isValid || loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Login
        </button>
      </div>
      <a href="/signup" className="text-blue-500 text-sm">
        Sign up
      </a>
    </form>
  );
}

export default LoginForm;
