import { Logo } from "../assets";

const Navbar = () => {
  return (
    <>
      <div>
        <Logo width="493" height="430" />
        <div className="min-w-960 md:my-auto">
          <div className="flex justify-end space-x-5 mr-5 text-[#FAEE6C] font-thin text-4xl font-roboto drop-shadow">
            <div className="">Admin</div> <div className="">Sign Up</div>
            <div className="">Documentation</div> <div className="">GitHub</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
