import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      to_name: "Dharshan",
      from_name: name,
      from_email: email,
      message: message,
    };
    emailjs.send(
      "service_df1wb3r",
      "template_1h87gtw",
      templateParams,
      "mZHVsWKCF28T1ex_5"
    );
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <section
        id="Contact"
        className="flex flex-col items-center justify-center"
      >
        <h1 className="flex justify-center font-bold  text-3xl mr-5 mt-10">
          Contact
        </h1>
        <form
          className=" flex flex-col justify-around items-center flex-wrap gap-1 bg-white shadow-lg  mt-4  w-[350px] h-[280px] rounded  "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            className="w-[330px] h-[40px] border border-gray-300 rounded px-1 placeholder:text-gray-500"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-[330px] h-[40px] border border-gray-300 rounded px-1 placeholder:text-gray-500"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter here..."
            className="w-[330px] h-[70px] border border-gray-300 rounded px-1 placeholder:text-gray-500"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className=" font-lightbold text-white px-2 py-1 rounded-lg bg-blue-600 cursor-pointer hover:bg-blue-700 w-full"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
