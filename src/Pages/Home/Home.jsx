import React from "react";
import homeImg from "../../assets/HomePage/img (2).png"
import GetDiscount from "./GetDiscount";
import HomeAbout from "./HomeAbout";
import OurProducts from "./OurProducts";
import OfferProduct from "./OfferProduct";
import FriendlyStore from "./FriendlyStore";
const Home = () => {
  return (
    <>
  <div className="home_background	">
      <div className="pt-12 md:pt-0 lg:pt-20 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="lg:w-2/4 xl:w-2/5 lg:ps-16  mx-auto  w-full ">
              <p className="text-[#68A47F] text-[36px] font-dancingFont  ps-4">100% Natural Food</p>
            <h2 className="big_title tracking-wider text-shadow">Choose the best healthier way of life</h2>
            <button className="explore_now_btn ms-5 mt-6">Explore Now</button>
            </div>
           <div className="lg:w-2/4 xl:w-2/5 ">
                <img className="object-cover lg:pt-12" src={homeImg} alt="" />
            </div>
        </div>
      </div>
     
    </div>
<GetDiscount></GetDiscount>
<HomeAbout></HomeAbout>
<OurProducts></OurProducts>
<OfferProduct></OfferProduct>
{/* <FriendlyStore></FriendlyStore> */}
    </>
  
  );
};

export default Home;
 