import React from "react";
import logo from "../assets/HomePage/Logo (1).svg";
const Footer = () => {
  return (
    <>
    <div className="container pb-12">
      <div className="grid grid-cols-1 gap-3  md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:border-r-2 lg:text-end pe-8">
          <h2 className="text-[30px] text-headingColor font-bold pb-3">
            Contact Us
          </h2>
          <h4 className="text-[18px] text-headingColor font-semibold">Email</h4>
          <p className="text-[#525C60]">needhelp@Organia.com</p>
          <h4 className="text-[18px] text-headingColor font-semibold pt-3">
            Phone
          </h4>
          <p className="text-[#525C60]">666 888 888</p>
          <h4 className="text-[18px] text-headingColor font-semibold pt-3">
            Address
          </h4>
          <p className="text-[#525C60]">88 road, borklyn street, USA</p>
        </div>
        <div className="lg:text-center text-[#525C60]">
          <img className="lg:mx-auto pt-2 text-center flex" src={logo} alt="" />
          <p className="pt-3">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </p>
        </div>
        <div className="lg:border-l-2  lg:ps-8">
          <h2 className="text-[30px] text-headingColor font-bold pb-3">
            Utility Pages
          </h2>

          <p className="text-[#525C60] text-[18px] pt-3">Style Guide</p>
          <p className="text-[#525C60] text-[18px] pt-3">404 Not Found</p>
          <p className="text-[#525C60] text-[18px] pt-3">Password Protected</p>
          <p className="text-[#525C60] text-[18px] pt-3">Licences</p>
          <p className="text-[#525C60] text-[18px] pt-3">Changelog</p>
        </div>
      </div>
    
    </div>
    <hr />
    <span className="text-center flex justify-center py-3 text-[18px] text-[#525C60] font-semibold">Copyright ©  | Designed by Raju Halder |</span>
    </>
  );
};

export default Footer;
