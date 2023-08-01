import React from "react";
import aboutImg from "../../assets/HomePage/Photo (1).png";
const HomeAbout = () => {
  return (
    <section className="bg-[#F9F8F8]">
      <div className="container">
        <div className="flex flex-col  md:flex-row justify-between gap-6">
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div className="lg:w-[702px] w-full">
            <p>About Us</p>
            <h3 className="text-headingColor lg:leading-[55px] text-[30px]  lg:text-[50px] font-bold">We Believe in Working Accredited Farmers</h3>
            <p className="text-[#525C60] text-[18px] pt-3">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
