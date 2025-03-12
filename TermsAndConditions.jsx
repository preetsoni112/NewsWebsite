import React from "react";

function TermsAndConditions() {
  return (
    <div className="bg-gray-100 border-red-700 border-y-2 min-h-screen py-10 px-4">
      <div className="border-red-700 border-y-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Terms and Conditions
        </h1>
        <p className="mb-4 text-gray-700">
          Welcome to Hot News! By accessing or using our website, you agree to
          the following terms:
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Use of the Website
        </h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>You must be at least 13 years old to use this site.</li>
          <li>You agree not to misuse the site or its content.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Content Ownership
        </h2>
        <p className="text-gray-700">
          All content on this site is owned by Hot News. Reproduction without
          permission is prohibited.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Disclaimers
        </h2>
        <p className="text-gray-700">
          We provide information "as is." We are not responsible for
          inaccuracies or damages resulting from reliance on our content.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Contact Us
        </h2>
        <p className="text-gray-700">
          For questions about these terms, please contact us at{" "}
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

export default TermsAndConditions;
