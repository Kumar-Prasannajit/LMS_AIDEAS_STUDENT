import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 box-border">
      <div
        className="w-full max-w-[1040px] min-h-[520px] bg-white rounded-[28px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] overflow-hidden border border-[rgba(217,217,217,1)]"
        style={{ display: "grid", gridTemplateColumns: "1.05fr 1.1fr" }}
      >
        <div className="relative overflow-hidden px-8 py-10 flex items-center justify-center max-[900px]:hidden">
          <div
            className="absolute inset-0 rounded-[20px] opacity-100"
            style={{
              backgroundImage: "url('/images/login.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(1.25)",
            }}
          />
          <div
            className="absolute inset-0 rounded-[20px]"
            style={{
              background:
                "linear-gradient(168deg, rgba(156,76,220,0.6), rgba(80,71,211,0.7))",
            }}
          />
          <div className="relative z-10 text-white max-w-[360px]">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/images/aideas-logo.png"
                alt="Aideas Logo"
                className="w-[98%] h-[101px] object-contain"
              />
            </div>
            <p className="px-10 text-sm leading-[1.7] text-center font-bold">
              Transform your career with industry-leading software training
              programs. Join thousands of successful professionals who started
              their journey with Aideas Academy.
            </p>
          </div>
        </div>

        <div className="px-14 py-10 flex items-center justify-center max-[900px]:px-6 max-[900px]:py-8">
          <div className="w-full max-w-[360px]">
            <h1 className="text-[32px] font-extrabold m-0 text-black">Welcome Back !</h1>
            <p className="mt-[30px] mb-3 text-black text-sm">Please enter your login details</p>

            <form className="flex flex-col gap-[18px]">
              <div className="flex flex-col gap-1.5">
                <input
                  id="email"
                  type="email"
                  className="w-full border-none px-[14px] py-3 text-[13px] outline-none bg-[rgba(217,217,217,0.2)] transition-all duration-150 focus:bg-white focus:shadow-[0_0_0_1px_rgba(99,102,241,0.35)] placeholder-gray-400"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="relative flex items-center">
                  <input
                    id="password"
                    type="password"
                    className="w-full border-none px-[14px] py-3 pr-10 text-[13px] outline-none bg-[rgba(217,217,217,0.2)] transition-all duration-150 focus:bg-white focus:shadow-[0_0_0_1px_rgba(99,102,241,0.35)] placeholder-gray-400"
                    placeholder="password"
                  />
                  <button
                    type="button"
                    className="absolute right-2.5 bg-transparent border-none cursor-pointer text-base opacity-60"
                    aria-label="Toggle password visibility"
                  >
                    👁
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="inline-flex items-center gap-1.5 text-gray-600 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-indigo-600" />
                  <span>Keep me logged in</span>
                </label>
                <button
                  type="button"
                  className="bg-transparent border-none text-indigo-500 cursor-pointer p-0 text-xs"
                >
                  Forgot password ?
                </button>
              </div>

              <button
                type="submit"
                className="mt-[18px] mx-auto block w-[60%] border-none rounded-lg py-3 font-semibold tracking-[0.08em] text-[13px] uppercase text-white cursor-pointer shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-px"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(112,71,237,1), rgba(184,72,255,1))",
                }}
              >
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;