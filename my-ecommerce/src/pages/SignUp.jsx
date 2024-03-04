import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosInstance, renewAxiosInstance } from "../api/AxiosInstance";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

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
    reset,
  } = useForm({
    mode: "onBlur",
  }); /* Bu, kullanıcı bir input alanını terk ettiğinde (yani odak dışına çıktığında) hata mesajının görüntülenmesini sağlar.*/
  /*  watch fonksiyonu genellikle formdaki dinamik veya dinamik olarak değişen alanları izlemek için kullanılır.Eğer watch kullanılmazsa, role_id alanının değerini dinleyemezsiniz ve bu değere göre belirli işlemler yapamazsınız. watch fonksiyonu, bir formdaki belirli bir alanın değerini izlemek için kullanılır ve bu değeri değişikliklere göre takip eder. */
  const [roles, setRoles] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
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
  /* Kod, bir formun gönderilmesi (submit) işlemini ele alır ve gönderilen verilere göre farklı eylemler gerçekleştirir. */
  /* onSubmit fonksiyonu, bir formdan gelen verileri işler. Verilere bağlı olarak, kullanıcı rolüne (role) ve diğer form alanlarına göre farklı veri yapısını dataForm değişkenine atar.*/
  /*. Bu fonksiyonun içinde, formdan alınan veriler bir nesne olan formData'ya atanır. Bu formData nesnesi, kullanıcı tarafından formdaki alanlara girilen verileri içerir.*/
  /* AxiosInstance.post kullanılarak gönderilen veriler API'ye HTTP POST isteği olarak iletilir. API bu isteği alır ve işler. İşlenecek işlem, genellikle bir veritabanına veri eklemek veya güncellemek*/
  /* bu kodda apı mesajı alert ile yolllamaktadır*/
  const onSubmit = async (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: watch("role_id"),
    };
    if (watch("role_id") === "2") {
      formData.store = {
        name: data.storeName,
        phone: data.storePhone,
        tax_no: data.storeTaxNumber,
        bank_account: data.storeIBAN,
      };
    }
    await AxiosInstance.post("signup", formData)
      .then((res) => {
        console.log("Post", res.data.message);
        //  toast.success(res.data.message);
        alert(res.data.message);
        history.push("/");
      })
      .catch((err) => {
        console.error("Post error:", err);
        // toast.error(err.error);
        alert(err.response.data.error);
      });
    console.log("formData:", formData);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-md mx-auto my-8 p-6 bg-white border rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-2">Hello </h1>
          <p className="mb-5 text-xs font-thin">
            Sign up and start shopping now
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
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
                <p className="text-red-500 text-xs font-bold">
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
              <select className="border" id="role_id" {...register("role_id")}>
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
              <div className="flex flex-col w-[400px]">
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
              <div className="flex flex-col  w-[400px]">
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
              <div className="flex flex-col w-[400px]">
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
              <div className="flex flex-col ">
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
          <button
            type="submit"
            disabled={loading || !isValid}
            className={` mt-5 bg-blue-500 text-white font-bold py-2 px-4 rounded ${
              !isValid || loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing Up" : "Sign Up"}
          </button>
        </div>
      </form>
    </>
  );
}
