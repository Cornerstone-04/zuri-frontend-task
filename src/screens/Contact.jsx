import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Footer, Checkbox } from "../components";
import { TabTitle } from "../utils/General";

const Contact = () => {
  TabTitle("Contact Page");

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [complete, setComplete] = useState(true);

  const toggleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isChecked &&
      user.message &&
      user.firstName &&
      user.lastName &&
      user.email &&
      user.email.includes("@") &&
      user.email.includes(".")
    ) {
      toast.success("Submitted!");
      setComplete(true);
    } else {
      setComplete(false);
    }
  };

  useEffect(() => {
    if (isChecked) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [isChecked]);

  useEffect(() => {
    if (
      isChecked ||
      user.message ||
      user.firstName ||
      user.lastName ||
      user.email ||
      user.email.includes("@") ||
      user.email.includes(".")
    ) {
      setComplete(true);
    }
  }, [isChecked, user.email, user.firstName, user.lastName, user.message]);

  return (
    <div className="bg-zuriBg min-h-screen w-full flex flex-col justify-start  items-center sm:gap-14 relative font-contact">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3500,
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "16px",
          },
        }}
      />
      <main className="w-full px-4 md:px-20 pt-16 flex flex-col justify-center items-center gap-12">
        <header className="w-full max-w-form flex flex-col justify-start items-start gap-5">
          <h1 className="font-semibold text-zuriGray-900 text-4xl">
            Contact Me
          </h1>
          <p className="text-xl text-zuriGray-600 font-normal">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </header>

        {/* contact form */}
        <form
          className="w-full max-w-form flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <section className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex flex-col gap-1.5 basis-2/4">
              <label
                htmlFor="first_name font-medium text-zuriGray-700"
                className="text-sm"
              >
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Enter your first name"
                className={
                  complete || user.firstName ? "input_area" : "input_error"
                }
                value={user.firstName}
                onChange={(e) => {
                  setUser({ ...user, firstName: e.target.value });
                }}
              />
              {!complete && !user.firstName ? (
                <label className="text-sm font-medium text-danger-100 transition-all ease-linear">
                  Please enter a message
                </label>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col gap-1.5 basis-2/4">
              <label
                htmlFor="last_name"
                className="text-sm font-medium text-zuriGray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Enter your last name"
                className={
                  complete || user.lastName ? "input_area" : "input_error"
                }
                value={user.lastName}
                onChange={(e) => {
                  setUser({ ...user, lastName: e.target.value });
                }}
              />
              {!complete && !user.lastName ? (
                <label className="text-sm font-medium text-danger-100 transition-all ease-linear">
                  Please enter your last name
                </label>
              ) : (
                ""
              )}
            </div>
          </section>
          <section className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zuriGray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="yourname@gmail.com"
              className={complete || user.email ? "input_area" : "input_error"}
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
            {!complete && !user.email ? (
              <label className="text-sm font-medium text-danger-100 transition-all ease-linear">
                Please enter a valid email
              </label>
            ) : (
              ""
            )}
          </section>
          <section className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-sm font-medium text-zuriGray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Send me a message and I'll reply you as soon as possible"
              className={complete || user.message ? "message" : "message_error"}
              value={user.message}
              onChange={(e) => {
                setUser({ ...user, message: e.target.value });
              }}
            ></textarea>
            {!complete && !user.message ? (
              <label className="text-sm font-medium text-danger-100 transition-all ease-linear">
                Please enter a message
              </label>
            ) : (
              ""
            )}
          </section>
          <section className="flex gap-3 items-start md:items-center">
            <Checkbox onChange={toggleClick} />
            <label
              htmlFor="checkbox"
              className="font-normal text-sm text-zuriGray-600"
            >
              You agree to providing your data to Cornerstone who may contact
              you.
            </label>
          </section>

          <button
            id="btn_submit"
            disabled={isDisabled}
            className="bg-primary-600 h-12 w-full outline-none transition ease-linear rounded-lg flex justify-center items-center py-3 font-medium text-base text-white mt-2 mb-btn md:mb-48 cursor-pointer disabled:bg-primary-200 focus:shadow-btn"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
