import React from "react";
import { NavLink } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 border-y-4 border-red-700 min-h-screen py-10 px-4">
      <div className="border-x-4 border-red-700 max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Privacy Policy</h1>
        <p className="mb-4 text-gray-700">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you use our
          website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Information We Collect
        </h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Personal Information: Name, email address, phone number, etc.</li>
          <li>Usage Data: Pages visited, time spent, IP address, etc.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>To provide and improve our services.</li>
          <li>To personalize user experience.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Your Rights
        </h2>
        <p className="text-gray-700">
          You have the right to access, update, or delete your personal data.
          Contact us at{" "}
          <NavLink
            to="/contact"
            className="text-blue-500 hover:underline"
          >
            Contact Me
          </NavLink>{" "}
          for any concerns.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Contact Us
        </h2>
        <p className="text-gray-700">
          If you have any questions, please email us at{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-500 hover:underline"
          >
            preetsoni112@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
