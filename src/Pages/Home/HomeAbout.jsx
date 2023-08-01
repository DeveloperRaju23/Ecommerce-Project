import React from "react";
import aboutImg from "../../assets/HomePage/Photo (1).png";
import logo1 from "../../assets/HomePage/Icon.png"
import logo2 from "../../assets/HomePage/Icon (1).png"
const HomeAbout = () => {
  return (
    <section className="bg-[#F9F8F8]">
      <div className="container">
        <div className="flex flex-col  md:flex-row justify-between gap-6">
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div className="lg:w-[702px] lg:mt-8 w-full">
            <p className="font-dancingFont text-[30px] text-[#7EB693]">About Us</p>
            <h3 className="text-headingColor lg:leading-[55px] text-[30px]  lg:text-[50px] font-bold">We Believe in Working Accredited Farmers</h3>
            <p className="text-[#525C60] text-[18px] pt-3">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="flex pt-6 gap-4">
                <img src={logo1} alt="" />
                <div>
                <h3 className="text-[25px] text-headingColor font-bold">Organic Foods Only</h3>
                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>
            </div>
            <div className="flex pt-6 gap-4">
                <img src={logo2} alt="" />
                <div>
                <h3 className="text-[25px] text-headingColor font-bold">Quality Standards</h3>
                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>
            </div>

            <button className="shop_now_btn mt-8">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
