import React from "react";
import image from "../assets/HomePage/Background22.png";
const OurSubscribe = () => {
  return (
    <section>
      <div className="container">
        <div className="subscribe_bg">
          {/* <img src={image} alt="" /> */}
          <div className="flex flex-col lg:px-14 md:flex-row justify-between items-center lg:h-60">
          <div className="">
            <h3 className="lg:text-[50px] text-[30px] text-[#FFFFFF] font-bold">Subscribe to <br /> our Newsletter</h3>
          </div>
          <div class="flex  justify-center items-center">
  <div class=" right-4 p-6 rounded-md  flex gap-3">
    <input
      type="email"
      placeholder="Your Email Address"
      className="px-4 font-dancingFont py-2 border border-gray-300 rounded-lg focus:outline-none "
    />
    <button
      type="submit"
      className="shop_now_btn"
    >
      Subscribe
    </button>
  </div>
</div>
        </div>
        </div>
      
      </div>
    </section>
  );
};

export default OurSubscribe;
