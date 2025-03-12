import React from "react";

export default function ContactUs() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "6938590e-0d53-4e14-89de-3a21918ff5bb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <div className={`max-w-full container flex justify-center items-center p-10`}>
      <form
        onSubmit={onSubmit}
        className=" bg-sky-100 rounded-xl shadow-lg border-y-4 border-red-700 w-full max-w-xl p-10"
      >
        <h1 className="font-bold text-2xl text-blue-700 text-center mb-6">
          Contact Us
        </h1>
        <input
          className="bg-transparent font-semibold text-sky-900 rounded-lg border-b-2 border-blue-700 p-3 mb-8 w-full"
          type="text"
          name="First_Name"
          placeholder="First Name"
          id="firstName"
          required
        />
        <input
          className="bg-transparent font-semibold text-sky-900  border-b-2 rounded-lg border-blue-700 p-3 mb-8 w-full"
          type="text"
          name="Last_Name"
          placeholder="Last Name"
          id="lastName"
          required
        />
        <input
          className="bg-transparent text-sky-900 font-semibold border-b-2 rounded-lg border-blue-700 p-3 mb-8 w-full"
          type="email"
          name="Email"
          placeholder="Email"
          id="email"
          required
        />
        <input
          className="bg-transparent text-sky-900 font-semibold border-b-2 rounded-lg border-blue-700 p-3 mb-8 w-full"
          type="tel"
          name="Mobile"
          placeholder="Mobile Number"
          id="number"
          required
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-500 text-white font-bold p-3 w-full hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
      <span className="mt-4 text-lg font-medium text-gray-700">{result}</span>
    </div>
  );
}
