import React from "react";
import img from "../../assets/HomePage/Image (5).png";
const FriendlyStore = () => {
  return (
    <div className=" flex relative overflow-hidden justify-between flex-col md:flex-row">


        <div className="">
        <img className=" md:w-4/5 w-full  " src={img} alt="" />
        </div>
      
     <div className=" bg-[#c5bbbb] w-1/2 absolute top-0 pe-12 right-[-60px] mt-28 mb-28  p-4">
     <div className=" py-12   rounded-2xl ">
       <p>Eco Friendly</p>
        <h3>Econis is a Friendly Organic Store</h3>

        <h5>Start with Our Company First</h5>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat
          accusantium doloremque laudantium. Sed ut perspiciatis.
        </p>
        <h5>Start with Our Company First</h5>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat
          accusantium doloremque laudantium. Sed ut perspiciatis.
        </p>
        <h5>Start with Our Company First</h5>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat
          accusantium doloremque laudantium. Sed ut perspiciatis.
        </p>
       </div>
     </div>
      
    
    </div>
  );
};

export default FriendlyStore;
