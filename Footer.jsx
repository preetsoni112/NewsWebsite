import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";
function Footer() {
  return (
    <>
      <div>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 flex items-center md:mb-0">
              <Link to="/" className="flex items-center">
                <img src={logo} className="rounded-full h-20" alt="Logo" />
              </Link>
              <h1 className="text-2xl font-bold">
                Hot{" "}
                <span className="text-2xl font-bold text-red-600">News</span>
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Resources
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <a
                      href="#home"
                      className="cursor-pointer hover:text-red-700 hover:underline"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="cursor-pointer hover:text-red-700 hover:underline"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="mt-4">
                    <NavLink
                      to="/contact"
                      className="cursor-pointer hover:text-red-700 hover:underline"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Follow us
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://www.instagram.com/iampreetsoni/"
                      className="hover:underline hover:text-red-700"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100093058983701"
                      className="cursor-pointer hover:text-red-700 hover:underline"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Legal
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <NavLink
                      to="/privacyPolicy"
                      href="#privacy"
                      className="cursor-pointer hover:text-red-700 hover:underline"
                    >
                      Privacy Policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/terms"
                      href="#terms"
                      className="cursor-pointer hover:text-red-700 hover:underline"
                    >
                      Terms &amp; Conditions
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2025
              <a
                href="https://www.linkedin.com/in/preet-soni-913232261/"
                className="hover:underline"
              >
                Preet Soni
              </a>
              . All Rights Reserved.
            </span>
            <div className="cursor-pointer flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/profile.php?id=100093058983701" className="text-gray-500 hover:text-gray-900">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="https://discord.com/users/PreetSoni#10668" className="text-gray-500 hover:text-gray-900">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a href="https://www.linkedin.com/in/preet-soni-913232261/" className="text-gray-500 hover:text-gray-900">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M18.944 0H1.058C.474 0 0 .475 0 1.058v17.884C0 19.525.475 20 1.058 20h17.884c.584 0 1.058-.475 1.058-1.058V1.058C20 .475 19.525 0 18.944 0zM6.013 16.912H3.338V7.707h2.675v9.205zM4.676 6.567c-.88 0-1.594-.715-1.594-1.594s.715-1.594 1.594-1.594c.88 0 1.594.715 1.594 1.594s-.714 1.594-1.594 1.594zm12.236 10.345h-2.675v-4.785c0-1.141-.023-2.608-1.588-2.608-1.589 0-1.833 1.241-1.833 2.523v4.87H8.14V7.707h2.57v1.26h.036c.357-.675 1.228-1.386 2.528-1.386 2.704 0 3.202 1.779 3.202 4.09v5.241z" />
                </svg>
                <span className="sr-only">LinkedIn page</span>
              </a>

              <a
                href="https://github.com/preetsoni112"
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a
                href="https://dribbble.com/iampreetsoni"
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribble account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
