"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "../lib/api";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const data = await login(email, password);

      // Save JWT token
      localStorage.setItem("access_token", data.access_token);

      // Redirect to dashboard
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Something went wrong.");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email
        </label>

        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Password
        </label>

        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
}
