import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AxiosInstance from "../api/AxiosInstance";

const mailValid =
  /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValid =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-]).+$/;
const phoneValid =
  /^(?:\+?90|0)?\s?([0-9]{3})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/;
const storeTaxIdValid = /^T\d{4}V\d{6}$/;
const ibanValid = /^[A-Z]{2}\d{2}[A-Z\d]{4}\d{7}([A-Z\d]?){0,16}$/;
export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm();
  /*  watch fonksiyonu genellikle formdaki dinamik veya dinamik olarak değişen alanları izlemek için kullanılır.Eğer watch kullanılmazsa, role_id alanının değerini dinleyemezsiniz ve bu değere göre belirli işlemler yapamazsınız. watch fonksiyonu, bir formdaki belirli bir alanın değerini izlemek için kullanılır ve bu değeri değişikliklere göre takip eder. */
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    AxiosInstance.get("/roles")
      .then((response) => {
        console.log("id:", response.data);
        setRoles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching roles:", error);
      });
  }, []);

  const password = watch("password");

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "You must enter at least 3 characters",
                  },
                })}
                className="   mt-1 px-3   border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              {errors.name && (
                <p className="text-red-500 text-[]]font-bold">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: mailValid,
                    message: "Must be a valid email address.",
                  },
                })}
                className="mt-1 px-3  border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              {errors.email && (
                <p className="text-red-500 text-xs font-bold">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long.",
                  },
                  pattern: {
                    value: passwordValid,
                    message:
                      "Password must contain at least one number, one lower case letter, one upper case letter and a special character.",
                  },
                })}
                className="mt-1 px-3  border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              {errors.password && (
                <p className="text-red-500 text-xs font-bold">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Enter your password"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="mt-1 px-3  border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs font-bold">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="role_id">Role</label>
              <select
                className="border"
                id="role_id"
                {...register("role_id")}
                defaultValue="Customer"
              >
                {roles.map((role, i) => (
                  <option key={i} value={role.id}>
                    {role.code.charAt(0).toUpperCase() + role.code.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {watch("role_id") === "2" && (
            <>
              <div className="flex flex-col">
                <label htmlFor="name">Store Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your store name"
                  {...register("name", {
                    required: "Store Name is required",
                    minLength: {
                      value: 3,
                      message: "You must enter at least 3 characters",
                    },
                  })}
                  className="mt-1 px-3  border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs font-bold">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">Store Phone </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your store phone | +90XXXXXXXXXX"
                  {...register("phone", {
                    required: "Store phone is required",
                    pattern: {
                      value: phoneValid,
                      message: "Invalid phone number",
                    },
                  })}
                  className="  mt-1 px-3  border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs font-bold">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="tax_no">Store Tax ID </label>
                <input
                  type="text"
                  id="tax_no"
                  placeholder="Enter your store tax number | TXXXXVXXXXXX"
                  {...register("tax_no", {
                    required: "Store Tax ID is required",
                    pattern: {
                      value: storeTaxIdValid,
                      message: "Must match the pattern TXXXXVXXXXXX",
                    },
                  })}
                  className="mt-1 px-3  border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                {errors.tax_no && (
                  <p className="text-red-500 text-xs font-bold">
                    {errors.tax_no.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="bank_account">Store Bank Account </label>
                <input
                  type="text"
                  id="bank_account"
                  placeholder="Enter your store IBAN | TRXXXXXXXXXXXXXXXXXXXXXXXX"
                  {...register("bank_account", {
                    required: "Store Bank Account is required!",
                    pattern: {
                      value: ibanValid,
                      message: "Must be a valid store bank account",
                    },
                  })}
                  className="mt-1 px-3  border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />

                {errors.bank_account && (
                  <p className="text-red-500 text-xs font-bold">
                    {errors.bank_account.message}
                  </p>
                )}
              </div>
            </>
          )}

          <button className="border p-2" type="submit" disabled={!isValid}>
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}
