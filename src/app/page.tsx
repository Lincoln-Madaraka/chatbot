"use client";

import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


export default function LoginPage() {const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim().toLowerCase() === "test@example.com") {
      localStorage.setItem("loggedIn", "true");
      toast.success("Welcome!");
      router.push("/chat");
    } else {
      toast.error("Invalid email");
    }
  };

  return (
     <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      {/* Logo */}
      <Image
        src="/logo.ico"
        alt="App Logo"
        width={80}
        height={80}
        className="mb-6"
      />

      <h1 className="text-2xl font-bold mb-4 text-gray-600">Login</h1>

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-red-900 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>

    </div>
  );
}
