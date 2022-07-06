import { Logo } from "../assets";
import background from "../assets/background.png";

const Navbar = () => {
  return (
    <>
      <div>
        <img src={background} className="App-logo" alt="logo" />
        <Logo />
      </div>
    </>
  );
};

export default Navbar;
