import React, { useState } from "react";

const RedeemCodeForm = () => {
  const [userDetails, setUserDetails] = useState<string>();

  const users = [];
  const addUser = (ev) => {
    ev.preventDefault();
    const user = {
      id: Date.now(),
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value
    };
    users.push(user);
    document.forms[0].reset();
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn").addEventListener("submit", addUser);
  });

  return (
    <>
      <div className="w-50 h-50 flex-col justify-center mt-10">
        <form className="flex-col">
          <div>
            <label className="text-[#ffd000] text-5xl pt-50">Contact</label>
          </div>
          <div>
            <label className="text-white text-xl">
              Want to say hello? Want to know more about us? Drop us an email
              and we will get back to you as soon as we can.
            </label>
          </div>
          <div>
            <label className="text-white text-xl">
              First Name
              <div>
                <input
                  className=" outline-[#ffd000] rounded-3xl text-white bg-black border-white border-2 ml-5 px-2 py-2 text-sm w-80"
                  type="text"
                  id="firstName"
                  placeholder="Write here..."
                  onChange={(e) => setUserDetails(e.target.value)}
                />
              </div>
            </label>
          </div>
          <div>
            <label className="text-white text-xl">
              Last Name
              <div>
                <input
                  className="outline-[#ffd000] rounded-3xl text-white bg-black border-white border-2 ml-5 px-2 py-2 text-sm w-80"
                  type="text"
                  id="lastName"
                  placeholder="Write here..."
                  onChange={(e) => setUserDetails(e.target.value)}
                />
              </div>
            </label>
          </div>
          <div>
            <label className="text-white text-xl mr-8">
              Email
              <div>
                <input
                  className="outline-[#ffd000] rounded-3xl text-white bg-black border-white border-2 ml-5 px-2 py-2 text-sm w-80"
                  type="text"
                  id="email"
                  placeholder="Write here..."
                  onChange={(e) => setUserDetails(e.target.value)}
                />
              </div>
            </label>
          </div>
          <div>
            <button
              className="bg-[#ffd000] text-black text-sm rounded-3xl px-5 mt-5 mb-5"
              type="submit"
              value="Submit"
              disabled={!userDetails}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default RedeemCodeForm;
