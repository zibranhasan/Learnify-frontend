"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};
const Page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it
  return (
    <div className="flex justify-center items-center relative h-screen bg-gray-900">
      {/* Background Line */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-full h-1/2 border-t-4 border-yellow-500 relative">
          <span className="block h-full w-4 bg-yellow-500 absolute left-1/2 transform-translate-x-1/2 -translate-y-1/2"></span>
        </div>
      </div>

      <div className="relative z-10 w-96 ml-3 bg-gray-800 p-8 rounded-xl shadow-xl flex flex-col items-center">
        {/* Logo */}
        <div className="bg-yellow-500 p-3 rounded-full mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18m9-9H3"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-white text-2xl mb-2 font-semibold">
          Log in to Runway
        </h2>
        <p className="text-gray-400 mb-6 text-sm">
          Business planning, designed for humans.
        </p>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col"
        >
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-400 text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              defaultValue="user@gmail.com"
              {...register("email")}
              className="w-full bg-gray-700 text-white py-2 px-4 mt-1 rounded-lg border border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none"
            />
            {errors.email && <span>This field is required</span>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-400 text-sm">
              Password
            </label>
            <input
              id="password"
              type="password"
              defaultValue="123456"
              {...register("password")}
              className="w-full bg-gray-700 text-white py-2 px-4 mt-1 rounded-lg border border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password && <span>This field is required</span>}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg mt-4"
          >
            Log In
          </button>
        </form>

        {/* Disclaimer */}
        <p className="text-gray-500 text-xs text-center mt-6">
          By clicking "Log In", you acknowledge that you have read, understood,
          and agree to Runway's Terms of Service & Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Page;
