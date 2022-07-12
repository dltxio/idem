import { Logo } from "../assets";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col">
        <Logo width="35%" height="35%" />
        <div className="flex justify-end space-x-5 mr-5 text-[#FAEE6C] font-thin text-4xl font-roboto drop-shadow">
          <div className="">Admin</div> <div className="">Sign Up</div>
          <div className="">Documentation</div> <div className="">GitHub</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
