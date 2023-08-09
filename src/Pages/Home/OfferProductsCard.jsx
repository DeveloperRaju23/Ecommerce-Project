import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const OfferProductsCard = ({item}) => {
    const {name,image,description,price,discount,title} = item
    return (
        <div className=''>
        <div className=' bg-[#F9F8F8] pb-3 rounded relative cursor-pointer'>
            <div className='w-[335px] h-[325px] mx-auto flex justify-center text-center'>
            <img className='object-cover lg:w-[200px] lg:h-[250px] mt-12 w-full' src={image} alt="" />
            </div>
         
            <h3 className='text-[20px] ps-6 text-headingColor  font-bold'>{name}</h3>
            <p className='border-b-2 mx-6 pt-2'></p>
            <div className='ps-6 flex justify-between pt-2'>
            <div className='flex gap-4'>
       
            <del className='text-[#B8B8B8] '>${discount}</del>
            <p className='text-headingColor font-bold'>${price}</p>
            </div>
                <div className='pe-6 flex items-center'>
                   <span><AiFillStar className='h-5 w-5 text-[#FFA858]'></AiFillStar></span>
                   <span><AiFillStar className='h-5 w-5 text-[#FFA858]'></AiFillStar></span>
                   <span><AiFillStar className='h-5 w-5 text-[#FFA858]'></AiFillStar></span>
                   <span><AiFillStar className='h-5 w-5 text-[#FFA858]'></AiFillStar></span>
                   <span><AiFillStar className='h-5 w-5 text-[#FFA858]'></AiFillStar></span>
                </div>
            </div>
            <div className='absolute top-5 left-4'>
            <p className='text-[#FFFFFF] bg-headingColor px-3 py-1 rounded-lg text-[18px] font-bold'>{title}</p>
            </div>
        </div>
    </div>
    );
};

export default OfferProductsCard;