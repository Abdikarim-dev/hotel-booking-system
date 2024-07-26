import { Input } from "@nextui-org/input";
import { MailIcon } from "../assets/MailIcon";

import LightPicture from "../assets/forgot-password-office.jpeg";
import DarkPicture from "../assets/forgot-password-office-dark.jpeg";
import { NavLink } from "react-router-dom";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().min(1, { message: "Email cannot be empty." }).email({
    message: "Please enter a valid email address.",
  }),
});

function VerifyEmail() {
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
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <form onSubmit={handleSubmit(handleForm)} className="w-full">
              <h1 className="pb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Verify Email
              </h1>

              <div>
                <Input
                  {...register("email")}
                  isClearable
                  type="email"
                  label="Email"
                  placeholder="you@example.com"
                  labelPlacement="outside"
                  startContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                />
                {errors?.email && (
                  <p className="pl-3 pt-1 text-red-600 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* <!-- You should use a button here, as the anchor is only used for the example  --> */}
              <button
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                type="submit"
              >
                Verify Email
              </button>
              <p className="mt-4 text-center">
                <NavLink
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/"
                >
                  Already verified? Back to Login
                </NavLink>
              </p>
              <p className="mt-1 text-center">
                <NavLink
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Forgot Password? 
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
