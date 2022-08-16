const ContactLink = () => {
  return (
    <div className="w-2/5 flex flex-col items-center mt-10">
      <h1 className="text-[#ffd000] text-5xl pt-50 w-full">Support</h1>
      <h2 className="text-white text-xl w-full mt-2">
        Get in contact with our team and we will get back to you shortly.
      </h2>
      <a
        className=" flex bg-[#ffd000] text-black md:text-base text-center rounded-3xl my-10 py-5 px-20 hover:bg-[#ab8d09]"
        href="mailto:support@dltx.io"
      >
        Contact Support
      </a>
    </div>
  );
};
export default ContactLink;
