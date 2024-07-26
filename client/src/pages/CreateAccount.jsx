import LightPicture from "../assets/create-account-office.jpeg";
import DarkPicture from "../assets/create-account-office-dark.jpeg";
import { Input } from "@nextui-org/input";
import { NavLink } from "react-router-dom";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Define an alphanumeric regex pattern with exceptions for underscore and dot
const alphanumericPattern = /^[a-zA-Z0-9._]+$/;

const schema = z
  .object({
    username: z
      .string()
      .min(1, { message: "Username cannot be empty." })
      .min(3, { message: "Username must be at least 3 characters long." })
      .regex(alphanumericPattern, {
        message:
          "Username can only contain letters, numbers, underscores, and dots.",
      })
      .max(30, { message: "Username must be at most 30 characters long." }),
    email: z.string().min(1, { message: "Email cannot be empty." }).email({
      message: "Please enter a valid email address.",
    }),
    password: z
      .string()
      .min(1, { message: "Password cannot be empty." })
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Please confirm your password." })
      .min(6, {
        message: "Confirm Password must be at least 6 characters long",
      }),
  })
  .refine((user) => user.password === user.confirmPassword, {
    message: "Passwords Donot Match!",
    path: ["confirmPassword"],
  });

function CreateAccount() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const handleForm = (user) => {
    console.log(user);
  };
  return (
    <div className="font-poppins flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={LightPicture}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={DarkPicture}
              alt="Office"
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 lg:p-9 md:w-1/2">
            <form onSubmit={handleSubmit(handleForm)} className="w-full">
              <h1 className="pb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Create account
              </h1>
              <div>
                <Input
                  {...register("username")}
                  type="text"
                  // label="Username"
                  placeholder="john.doe"
                  // labelPlacement="outside"
                  // startContent={
                  //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                />
                {errors?.username && (
                  <p className="pl-3 pt-1 text-red-600 text-sm">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  {...register("email")}
                  className="pt-4"
                  type="text"
                  // label="Email"
                  placeholder="you@example.com"
                  // labelPlacement="outside"
                  // startContent={
                  //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                />
                {errors?.email && (
                  <p className="pl-3 pt-1 text-red-600 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  {...register("password")}
                  className="pt-4"
                  type="password"
                  // label="Password"
                  placeholder="Password"
                  // labelPlacement="outside"
                  // startContent={
                  //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                />
                {errors?.password && (
                  <p className="pl-3 pt-1 text-red-600 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  {...register("confirmPassword")}
                  className="pt-4"
                  type="password"
                  // label="Confirm Password"
                  placeholder="Confirm Password"
                  // labelPlacement="outside"
                  // startContent={
                  //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                />
                {errors?.confirmPassword && (
                  <p className="pl-3 pt-1 text-red-600 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* <!-- You should use a button here, as the anchor is only used for the example  --> */}
              <button
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                type="submit"
              >
                Create account
              </button>

              <hr className="my-8" />

              {/* <button className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                <svg
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
                Twitter
              </button> */}
              <p className="mt-4 text-center">
                <NavLink
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/"
                >
                  Already have an account? Login
                </NavLink>
              </p>
              <p className="mt-1 text-center">
                <NavLink
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/verify-email"
                >
                  Is your Verified? Verify Email
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
