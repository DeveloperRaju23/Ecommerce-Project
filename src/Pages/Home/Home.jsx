import React from "react";
import homeImg from "../../assets/HomePage/img (2).png"
import GetDiscount from "./GetDiscount";
import HomeAbout from "./HomeAbout";
const Home = () => {
  return (
    <>
  <div className="home_background	">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="lg:w-2/4 xl:w-2/5 lg:ps-16  mx-auto  w-full ">
              <p className="text-[#68A47F] text-[36px] font-medium ps-4">100% Natural Food</p>
            <h2 className="big_title tracking-wider text-shadow">Choose the best healthier way of life</h2>
            <button className="explore_now_btn ms-5 mt-6">Explore Now</button>
            </div>
           <div className="lg:w-2/4 xl:w-2/5 ">
                <img className="object-cover " src={homeImg} alt="" />
            </div>
        </div>
      </div>
     
    </div>
<GetDiscount></GetDiscount>
<HomeAbout></HomeAbout>
    </>
  
  );
};

export default Home;
 