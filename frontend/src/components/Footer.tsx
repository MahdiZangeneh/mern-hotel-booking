import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="invert" />
        </Link>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
