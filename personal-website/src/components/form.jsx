import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Modal from "react-modal";

export function Form() {
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Move the state here
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const emailValue = form.current.elements.user_email.value.trim();
    const messageValue = form.current.elements.message.value.trim();

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(emailValue) || messageValue === "") {
      // Show an error modal indicating the fields are required
      setErrorMessage("Please enter a valid email address and message.");
      setErrorModalOpen(true);
      return;
    }

    // emailjs
    //   .sendForm(
    //     "service_ssxrqrt",
    //     "template_hvt34wc",
    //     form.current,
    //     "dLOCKCAD8tV31aBwD"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       // Show a pop-up or alert
    //       setSuccessModalOpen(true);
    //       // Clear the form
    //       form.current.reset();
    //     },
    //     (error) => {
    //       setErrorMessage("Something went wrong. Please try again.");
    //        setErrorModalOpen(true);
    //     }
    //   );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      action="/submit-form"
      method="POST"
      className="mx-auto mt-16 max-w-xl sm:mt-16"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div>
            <input
              type="email"
              name="user_email"
              id="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="relative "></div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="4"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-10"
        >
          Let's connect
        </button>
      </div>
      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={() => {
          setSuccessModalOpen(false);
          setErrorMessage(""); // Clear the error message when the modal is closed
        }}
        contentLabel="Email Sent Modal"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
      >
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800 mb-4">
            Your email has been sent!
          </p>
          <button
            onClick={() => {
              setErrorModalOpen(false);
              setErrorMessage(""); // Clear the error message when the modal is closed
            }}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Error Modal */}
      <Modal
        isOpen={isErrorModalOpen}
        onRequestClose={() => {
          setErrorModalOpen(false);
          setErrorMessage(""); // Clear the error message when the modal is closed
        }}
        contentLabel="Error Modal"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
      >
        <div className="text-center">
          <p className="text-xl font-semibold text-red-600 mb-4">
            Something went wrong. Please try again.
          </p>
          <button
            onClick={() => setErrorModalOpen(false)}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
          >
            Close
          </button>
        </div>
      </Modal>
    </form>
  );
}
