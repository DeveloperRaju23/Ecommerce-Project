import React, { useEffect, useState } from 'react';
import OfferProductsCard from './OfferProductsCard';

const OfferProduct = () => {
    const [products , setProducts] = useState([])
    useEffect( () => {
        fetch("OfferProducts.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
    
         <div className='bg-[#274C5B]'>
        <div className='container py-32'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div>
                    <p className='font-dancingFont text-[24px]  text-[#7EB693] lg:text-[36px]'>Offer</p>
                    <h2 className='lg:text-[50px] text-[27px] mb-3 text-[#FFFFFF] font-bold'>We Offer Organic For You</h2>
                </div>
                <div>
                    <button className='explore_now_btn'>View All Product</button>
                </div>
            </div>
            <div className="grid grid-cols-1 pt-8 md:grid-cols-3 gap-3 lg:grid-cols-4">
            {
                products.map(item => <OfferProductsCard
                 key={item.id}
                 item={item}
                 >

                 </OfferProductsCard>)
            }
            
        </div>
        </div>
        </div>
     
    );
};

export default OfferProduct;