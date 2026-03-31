import React from "react";
import user from "../assets/user.png";
import products from "../assets/package.png";
import start from "../assets/rocket.png";

const Pricing = () => {
  return (
    <div className=" ">
      {/* Get started section */}
      <div className="bg-base-200 py-20 ">
        <div className=" mx-auto text-center mb-10 space-y-3">
          <h1 className="text-4xl font-extrabold">Get Started in 3 Steps</h1>
          <p className="text-[#627382] ">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="w-10/12  mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className=" bg-[#FFF] p-6 rounded-2xl ">
            <div className="flex justify-end">
              <p className=" w-10 h-10 flex justify-center items-center text-center rounded-full bg-linear-to-r from-[#3628AB] to-[#9514FA] text-white">
                01
              </p>
            </div>
            <div className="text-center">
              <img
                className="mx-auto p-3 w-20 h-20 bg-[#9514FA1A] rounded-full "
                src={user}
                alt=""
              />
              <h3 className="text-2xl font-bold my-6">Create Account</h3>
              <p className="text-[#627382] pb-12">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>

          <div className=" bg-[#FFF] p-6 rounded-2xl">
            <div className="flex justify-end">
              <p className=" w-10 h-10 flex justify-center items-center text-center rounded-full bg-linear-to-r from-[#3628AB] to-[#9514FA] text-white">
                02
              </p>
            </div>
            <div className="text-center">
              <img
                className="mx-auto p-3 w-20 h-20 bg-[#9514FA1A] rounded-full "
                src={products}
                alt=""
              />
              <h3 className="text-2xl font-bold my-6">Choose Products</h3>
              <p className="text-[#627382] pb-12">
                Browse our catalog and select the tools <br /> that fit your
                needs.
              </p>
            </div>
          </div>

          <div className=" bg-[#FFF] p-6 rounded-2xl">
            <div className="flex justify-end">
              <p className=" w-10 h-10 flex justify-center items-center text-center rounded-full bg-linear-to-r from-[#3628AB] to-[#9514FA] text-white">
                03
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-[#9514FA1A] flex items-center justify-center">
                <img className="w-10 h-10 " src={start} alt="" />
              </div>
              <h3 className="text-2xl font-bold my-6">Start Creating</h3>
              <p className="text-[#627382] pb-12">
                Download and start using your premium <br />
                tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div className="w-10/12 mx-auto text-center mt-20 mb-10 space-y-3">
        <h1 className="text-4xl font-extrabold">Simple, Transparent Pricing</h1>
        <p className="text-[#627382] ">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="mb-20 w-10/12 mx-auto gap-5 grid grid-cols-1 md:grid-cols-3">
        <div className="card w-full bg-base-200  text-[#627382] shadow-sm">
          <div className="card-body relative">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Starter</h2>
              <p>Perfect for getting started</p>
              <span className="text-3xl mt-3">
                <span className="text-4xl font-bold text-black">$0</span>/Month
              </span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block  text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Access to 10 free tools</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Basic templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Community support</span>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>1 project per month</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn  bg-linear-to-r from-[#3628AB] to-[#9514FA] btn-block text-white rounded-2xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="card w-full bg-linear-to-r from-[#3628AB] to-[#9514FA] text-white shadow-sm">
          <div className="card-body relative">
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 badge badge-xs badge-warning">
              Most Popular
            </span>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Pro</h2>
              <p>Best for professionals</p>
              <span className="text-3xl mt-3">
                <span className="text-4xl font-bold ">$29</span>/Month
              </span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block  text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Access to all premium tools</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Priority support</span>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited projects</span>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Cloud sync</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Advanced analytics</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary bg-white btn-block text-[#9514FA] rounded-2xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-200  text-[#627382] shadow-sm">
          <div className="card-body relative">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Enterprise</h2>
              <p>For teams and businesses</p>
              <span className="text-3xl mt-3">
                <span className="text-4xl font-bold text-black">$99</span>/Month
              </span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block  text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Everything in Pro</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Team collaboration</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Custom integrations</span>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Dedicated support</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>SLA guarantee</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Custom branding</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn  bg-linear-to-r from-[#3628AB] to-[#9514FA] btn-block text-white rounded-2xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
