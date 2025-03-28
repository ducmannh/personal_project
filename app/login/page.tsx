"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import useAuthStore from "../store/useAuthStore";
import { toast } from "react-toastify";

interface SignInFormData {
  username: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuthStore();
  const signInSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string().min(5, "Password must be at least 5 characters"),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      await login(data.username, data.password);
      router.push("/admin");
      
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("401")) {
          setError("username", {
            type: "manual",
            message: "Tên đăng nhập hoặc mật khẩu không đúng",
          });
          setError("password", {
            type: "manual",
            message: "Tên đăng nhập hoặc mật khẩu không đúng",
          });
          toast.error("Tên đăng nhập hoặc mật khẩu không đúng!", {
            position: "top-right",
            autoClose: 3000, 
          });
        } else {
          setError("root", {
            type: "manual",
            message: "Có lỗi xảy ra, vui lòng thử lại sau",
          });
          toast.error("Có lỗi xảy ra, vui lòng thử lại sau!", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Sign In
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="Username"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">
                {errors.username?.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password?.message as string}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?
          <a
            href="/register"
            className="text-indigo-600 hover:text-indigo-500 font-medium ml-1"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
