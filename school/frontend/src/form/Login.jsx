import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Login() {
  const [showPwd, setShowPwd] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    clearErrors("root");
    try {
      // Simulate async login (replace with your API call)
      await new Promise((r) => setTimeout(r, 700));
      // Example failure path:
      // throw new Error("Invalid credentials");
      alert("Logged in (demo) ✅");
    } catch (e) {
      setError("root", { message: e.message || "Login failed. Try again." });
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900">
      <div className="w-11/12 max-w-6xl mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: Illustration + messaging (inline SVG = always works) */}
          <motion.section
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md shadow-xl border border-gray-100 hidden md:block"
          >
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold">
                  S
                </span>
                <h1 className="text-2xl font-bold tracking-tight">ScholarHub</h1>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight">
                Welcome back 👋
              </h2>
              <p className="mt-2 text-gray-600">
                Access classes, attendance, grades, and campus updates securely.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                  Single sign-on ready
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-600" />
                  2FA compatible
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                  Works on any device
                </li>
              </ul>

              {/* Inline SVG Illustration (no external links, guaranteed to render) */}
              <div className="mt-8 flex items-center justify-center">
                <EduIllustration className="w-full max-w-md drop-shadow" />
              </div>
            </div>
          </motion.section>

          {/* RIGHT: Form */}
          <motion.section
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl bg-white shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold">Sign in to your account</h3>
              <p className="text-sm text-gray-600 mt-1">
                New here?{" "}
                <Link to="/register" className="text-blue-600 hover:underline">
                    Create an account
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Email */}
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                School Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@school.edu"
                className={`w-full rounded-xl border px-4 py-2.5 outline-none transition focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500 bg-white border-gray-300 ${
                  errors.email ? "border-red-500 focus:ring-red-400" : ""
                }`}
                aria-invalid={!!errors.email}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    // Basic RFC-5322-ish
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}

              {/* Password */}
              <label
                htmlFor="password"
                className="block text-sm font-medium mt-4 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPwd ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full rounded-xl border px-4 py-2.5 pr-12 outline-none transition focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500 bg-white border-gray-300 ${
                    errors.password ? "border-red-500 focus:ring-red-400" : ""
                  }`}
                  aria-invalid={!!errors.password}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "At least 8 characters",
                    },
                    validate: (v) => {
                      const strong =
                        /[A-Z]/.test(v) && /[a-z]/.test(v) && /\d/.test(v);
                      return strong || "Use upper, lower, and a number";
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs px-2 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
                  aria-label={showPwd ? "Hide password" : "Show password"}
                >
                  {showPwd ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}

              {/* Remember + Forgot */}
              <div className="mt-4 flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    {...register("remember")}
                    defaultChecked
                  />
                  Remember me
                </label>
                <a
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 shadow hover:opacity-95 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isSubmitting ? "Signing in…" : "Sign In"}
              </button>

              {/* Global form error */}
              {"root" in errors && errors.root?.message && (
                <p className="mt-3 text-sm text-red-600">
                  {errors.root.message}
                </p>
              )}

              {/* Divider */}
              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-xs uppercase tracking-wider text-gray-500">
                  or
                </span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              {/* School-friendly SSO buttons (optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full rounded-xl border border-gray-300 bg-white py-2.5 hover:bg-gray-50"
                  onClick={() => alert("Continue with Google (demo)")}
                >
                  Continue with Google
                </button>
                <button
                  type="button"
                  className="w-full rounded-xl border border-gray-300 bg-white py-2.5 hover:bg-gray-50"
                  onClick={() => alert("Continue with Microsoft (demo)")}
                >
                  Continue with Microsoft
                </button>
              </div>

              <p className="mt-6 text-xs text-gray-500">
                By signing in, you agree to our{" "}
                <a href="/terms" className="underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="/privacy" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

/** Inline, license-safe illustration (no external network needed) */
function EduIllustration({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Education and online learning illustration"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      {/* Desk */}
      <rect x="40" y="360" width="560" height="16" rx="8" fill="#e5e7eb" />
      <rect x="80" y="368" width="120" height="12" rx="6" fill="#d1d5db" />
      <rect x="440" y="368" width="120" height="12" rx="6" fill="#d1d5db" />

      {/* Monitor */}
      <rect x="160" y="120" width="240" height="160" rx="14" fill="#111827" />
      <rect x="170" y="130" width="220" height="140" rx="10" fill="#0b1220" />
      <rect x="170" y="130" width="220" height="140" rx="10" fill="url(#g1)" opacity="0.15" />
      <rect x="250" y="288" width="60" height="42" rx="6" fill="#1f2937" />
      <rect x="240" y="326" width="80" height="12" rx="6" fill="#9ca3af" />

      {/* Graduation cap */}
      <polygon points="480,160 560,190 480,220 400,190" fill="#1f2937" />
      <rect x="475" y="205" width="10" height="26" rx="2" fill="#374151" />
      <circle cx="480" cy="232" r="4" fill="#f59e0b" />
      <rect x="480" y="232" width="2" height="26" fill="#f59e0b" />
      <circle cx="481" cy="258" r="5" fill="#f59e0b" />

      {/* Student (simplified) */}
      <circle cx="86" cy="210" r="30" fill="#f59e0b" />
      <circle cx="86" cy="205" r="22" fill="#fde68a" />
      <rect x="56" y="238" width="60" height="70" rx="12" fill="#2563eb" />
      <rect x="46" y="262" width="22" height="46" rx="8" fill="#1d4ed8" />
      <rect x="108" y="262" width="22" height="46" rx="8" fill="#1d4ed8" />

      {/* Book */}
      <rect x="110" y="320" width="130" height="20" rx="4" fill="#ef4444" />
      <rect x="110" y="316" width="130" height="6" rx="3" fill="#f87171" />

      {/* UI blocks on screen */}
      <rect x="190" y="150" width="70" height="20" rx="4" fill="#ffffff" opacity="0.85" />
      <rect x="190" y="178" width="160" height="14" rx="4" fill="#ffffff" opacity="0.6" />
      <rect x="190" y="198" width="160" height="14" rx="4" fill="#ffffff" opacity="0.6" />
      <rect x="190" y="218" width="120" height="14" rx="4" fill="#ffffff" opacity="0.6" />
    </svg>
  );
}
