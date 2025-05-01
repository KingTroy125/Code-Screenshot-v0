import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { ArrowRightIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import RetroGrid from "../components/ui/Grid";

export default function Signup() {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo: Navigate to editor page without registration
    navigate('/editor');
  };

  // Social signup handlers
  const handleSocialSignup = () => {
    // Demo: Navigate to editor page without registration
    navigate('/editor');
  };

  return (
    <main
      className="w-full min-h-screen flex flex-col items-center justify-center sm:px-4 relative bg-gradient-to-br from-neutral-900 via-purple-950/20 to-blue-950/20"
    >
      <div className="absolute top-0 z-[0] h-full w-full bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <RetroGrid />

      <div className="max-w-sm w-full text-gray-600 space-y-8 relative z-10">
        <div className="text-left">
          <Link to="/" className="inline-block">
            <div className="text-xl font-bold">
              Code<span className="text-purple-400">Shot</span>
            </div>
          </Link>
          <div className="mt-6 space-y-2 mr-auto">
            <h3 className="text-gray-200 text-2xl font-normal sm:text-3xl tracking-tighter">
              Create your account
            </h3>
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-purple-400 hover:text-purple-300"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="font-medium text-gray-300">Full Name</label>
              <Input
                type="text"
                required
                placeholder="Your Name"
                className="w-full mt-2 px-3 py-4 text-gray-300 bg-transparent outline-none focus:border-purple-600/50 shadow-sm rounded-lg border-white/20 border-[1px]"
              />
            </div>
            <div>
              <label className="font-medium text-gray-300">Email</label>
              <Input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full mt-2 px-3 py-4 text-gray-300 bg-transparent outline-none focus:border-purple-600/50 shadow-sm rounded-lg border-white/20 border-[1px]"
              />
            </div>
            <div>
              <label className="font-medium text-gray-300">Password</label>
              <Input
                type="password"
                required
                placeholder="••••••••"
                className="w-full mt-2 px-3 py-4 text-gray-300 bg-transparent outline-none focus:border-purple-600/50 shadow-sm rounded-lg border-white/20 border-[1px]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 group px-4 py-4 font-medium tracking-tighter text-xl text-white bg-purple-200/10 transform-gpu border-[1px] border-white/10 shadow-[0_-20px_80px_-20px_#8686f01f_inset] hover:bg-transparent/10 active:bg-purple-600 rounded-lg duration-150"
          >
            Create Account
            <ArrowRightIcon className="inline-flex justify-center items-center w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
          </button>
          <div className="mt-2 text-center text-xs text-gray-400">
            <span className="italic">Demo mode: Click create account to continue</span>
          </div>
        </form>
        <div className="relative">
          <span className="block w-full h-px bg-white/10"></span>
          <p className="inline-block w-fit text-sm text-gray-200 bg-neutral-900 px-2 absolute -top-2 inset-x-0 mx-auto">
            Or continue with
          </p>
        </div>
        <div className="space-y-4 text-sm text-gray-200/50 font-medium">
          <button 
            onClick={handleSocialSignup}
            className="group w-full space-x-1 py-3 flex transform-gpu border-[1px] border-white/10 shadow-[0_-20px_80px_-20px_#8686f01f_inset] items-center justify-center rounded-lg hover:bg-transparent/20 duration-150 active:bg-transparent/50"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_40)">
                <path
                  d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                  fill="#4285F4"
                />
                <path
                  d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                  fill="#34A853"
                />
                <path
                  d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                  fill="#FBBC04"
                />
                <path
                  d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_40">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Continue with Google
          </button>
          <button 
            onClick={handleSocialSignup}
            className="group w-full space-x-1 py-3 flex transform-gpu border-[1px] border-white/10 shadow-[0_-20px_80px_-20px_#8686f01f_inset] items-center justify-center rounded-lg hover:bg-transparent/20 duration-150 active:bg-transparent/50"
          >
            <TwitterLogoIcon className="w-5 h-5 mr-2 text-[#1DA1F2]" />
            Continue with Twitter
          </button>
          <button 
            onClick={handleSocialSignup}
            className="group w-full space-x-1 py-3 flex transform-gpu border-[1px] border-white/10 shadow-[0_-20px_80px_-20px_#8686f01f_inset] items-center justify-center rounded-lg hover:bg-transparent/20 duration-150 active:bg-transparent/50"
          >
            <GitHubLogoIcon className="w-5 h-5 mr-2" />
            Continue with GitHub
          </button>
        </div>
        <div className="text-center text-xs text-gray-400">
          By signing up, you agree to our
          <Link to="/terms" className="text-purple-400 hover:text-purple-300 mx-1">
            Terms of Service
          </Link>
          and
          <Link to="/privacy" className="text-purple-400 hover:text-purple-300 mx-1">
            Privacy Policy
          </Link>
        </div>
      </div>
    </main>
  );
} 