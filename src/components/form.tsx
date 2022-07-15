const RedeemCodeForm = () => {
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
                  className=" outline-[#ffd000] rounded-3xl text-white bg-black border-white border-2 ml-5 mt-2 px-2 py-2 text-sm w-80"
                  type="text"
                  id="firstName"
                  placeholder="Write here..."
                />
              </div>
            </label>
          </div>
          <div>
            <label className="text-white text-xl">
              Last Name
              <div>
                <input
                  className="outline-[#ffd000] rounded-3xl text-white bg-black border-white mt-2 border-2 ml-5 px-2 py-2 text-sm w-80"
                  type="text"
                  id="lastName"
                  placeholder="Write here..."
                />
              </div>
            </label>
          </div>
          <div>
            <label className="text-white text-xl mr-8">
              Email
              <div>
                <input
                  className="outline-[#ffd000] rounded-3xl text-white bg-black border-white border-2 ml-5 mt-2 px-2 py-2 text-sm w-80"
                  type="text"
                  id="email"
                  placeholder="Write here..."
                />
              </div>
            </label>
          </div>
          <div>
            <button
              className="bg-[#ffd000] text-black text-sm rounded-3xl px-5 py-2 mb-10 hover:bg-[#ab8d09]"
              type="submit"
              value="Submit"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default RedeemCodeForm;
