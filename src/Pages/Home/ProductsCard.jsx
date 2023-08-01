import React from 'react';

const ProductsCard = ({item}) => {
    const {name,image,description,price,discount,title} = item
    return (
        <div className=''>
            <div className=' bg-[#F9F8F8] border rounded relative cursor-pointer'>
                <div className='w-[335px] h-[335px] mx-auto flex justify-center text-center'>
                <img className='object-cover lg:w-[200px] lg:h-[250px] mt-12 w-full' src={image} alt="" />
                </div>
             
                <h3 className='text-[20px] ps-6 text-headingColor  font-bold'>{name}</h3>
                <p className='border-b-2 mx-6 pt-2'></p>
                <div className='ps-6 flex justify-between'>
                <div className='flex'>
                <p>${discount}</p>
                <p>${price}</p>
                </div>
                    <div className='pe-6'>
                        <h3>star</h3>
                    </div>
                </div>
                <div className='absolute top-5 left-4'>
                <p className='text-[#FFFFFF] bg-headingColor px-3 py-1 rounded-lg text-[18px] font-bold'>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;