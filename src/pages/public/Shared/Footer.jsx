import moment from "moment/moment";
import Heading from "../../../components/Heading";
import { MdCall, MdLocationOn } from "react-icons/md";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import icon from "/icon.png";

const Footer = () => {
  return (
    <footer className="mx-auto bg-base-200">
      <div className=" border-b pt-10 lg:w-3/4 mx-auto">
        <div className="w-fit mx-auto p-5 flex flex-col items-center">
          <Heading></Heading>
          <p>A Foreign Language School.</p>
        </div>
      </div>

      <div className="footer justify-center md:gap-40 p-10 lg:w-3/4 mx-auto font-medium text-base">
        <div>
          <div className="flex gap-2 text-lg items-center">
            <img src={icon} alt="" className="w-7" />
            <h1>DMF LANGUAGE CLUB</h1>
          </div>
          <p className="flex gap-2">
            <MdLocationOn className="text-xl"></MdLocationOn>
            Level-4, 34 Banani, Dhaka
          </p>
          <p className="flex gap-2">
            <FaEnvelope className="text-lg"></FaEnvelope>
            info@dmf-language-club.edu
          </p>
          <p className="flex gap-2">
            <MdCall className="text-xl"></MdCall>
            +880 1254846546
          </p>
        </div>
        <div>
          <div className="flex gap-2 text-lg items-center">
            <h1 className="text-2xl mb-5">FOLLOW US</h1>
          </div>
          <div className="flex gap-5">
            <a className="btn btn-circle btn-outline text-blue-600">
              <FaFacebookF className="text-xl"></FaFacebookF>
            </a>
            <a className="btn btn-circle btn-outline text-blue-600">
              <FaInstagram className="text-2xl text-pink-700"></FaInstagram>
            </a>
            <a className="btn btn-circle btn-outline text-blue-600">
              <FaTwitter className="text-2xl"></FaTwitter>
            </a>
            <a className="btn btn-circle btn-outline text-blue-600">
              <FaLinkedin className="text-2xl"></FaLinkedin>
            </a>
          </div>
        </div>
      </div>
      <div className="footer footer-center py-4 border-t border-base-300 text-xl">
        <p>
          Copyright © {moment().format("YYYY")} | All right reserved <br /> DMF
          Language Club
        </p>
      </div>
    </footer>
  );
};

export default Footer;
