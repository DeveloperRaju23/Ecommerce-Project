import React from 'react'
import img1 from "../../assets/HomePage/Image (1).png"
import img2 from "../../assets/HomePage/Image (3).png"
const GetDiscount = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex flex-col  md:flex-row justify-between gap-6 items-center'>
                <div className='relative'>
                    <img src={img1} alt="" />
                    <div className='absolute top-[24%] lg:top-[30%] left-8 lg:left-12'>
                    <p className='lg:text-[36px] text-2xl text-[#FFFFFF]'>Natural!!</p>
                    <h4 className='lg:text-[40px] text-2xl font-bold pt-2 lg:leading-[45px] text-[#FFFFFF]'>Get Garden <br /> Fresh Fruits</h4>
                    </div>
                </div>
                <div className='relative'>
                    <img src={img2} alt="" />
                    <div className='absolute top-[24%] lg:top-[30%] left-8 lg:left-12'>
                    <p className='lg:text-[36px] text-2xl text-[#7EB693]'>Offer!!</p>
                    <h4 className='lg:text-[40px] text-2xl font-bold pt-2 lg:leading-[45px] text-headingColor'>Get 10% off <br /> on Vegetables</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GetDiscount