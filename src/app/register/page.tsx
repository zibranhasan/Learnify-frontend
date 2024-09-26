"use client";

import { registerUser } from "@/services/actions/register";

import { useRouter } from "next/navigation";

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type TformData = {
  username: string;
  email: string;
  password: string;
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data: TformData) => {
    try {
      const res = await registerUser(data);
      console.log(res);
      if (res?.data?._id) {
        toast.success(res.message);
        router.push("/login");
      } else {
        toast.error("Registration failed!");
      }
    } catch (err) {
      console.error(err.message);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Username */}
          <div>
            <label htmlFor="username" className="text-gray-400 text-sm">
              Username
            </label>

            <input
              id="username"
              type="text"
              className={`w-full p-2 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 ${
                errors.username ? "focus:ring-red-500" : "focus:ring-yellow-500"
              }`}
              {...register("username", { required: "Username is required" })}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-gray-400 text-sm">
              Email
            </label>

            <input
              id="email"
              type="text"
              className={`w-full p-2 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-500" : "focus:ring-yellow-500"
              }`}
              {...register("email", {
                required: "Email is  required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-gray-400 text-sm">
              Password
            </label>

            <input
              id="password"
              type="password"
              className={`w-full p-2  mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 ${
                errors.password ? "focus:ring-red-500" : "focus:ring-yellow-500"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Already have an account?{" "}
            <span className="text-yellow-500 font-semibold cursor-pointer">
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
