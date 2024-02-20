import { useForm } from "react-hook-form";

const mailValid =
  /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passawordValid =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-]).+$/;
export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "You must enter at least 3 characters",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: mailValid,
              message: "Must be a valid email address.",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Şifre</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long.",
            },
            pattern: {
              value: passawordValid,
              message:
                "Password must contain at least one number, one lower case letter, one upper case letter and a special character.",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <button type="submit">Kaydol</button>
      </form>
    </>
  );
}
