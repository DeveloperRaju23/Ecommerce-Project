import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const OurProducts = () => {
    const [products , setProducts] = useState([])
    const [showAll, setShowAll] = useState(false);
    const itemsToShow = showAll ? products : products.slice(0, 8);

    useEffect( () => {
        fetch("Products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <p className="lg:text-[36px] text-[24px] text-[#7EB693] font-dancingFont">Categories</p>
          <h2 className="lg:text-[50px] text-3xl text-headingColor font-bold">Our Products</h2>
        </div>
        <div className="grid grid-cols-1 pt-8 md:grid-cols-3 gap-3 lg:grid-cols-4">
            {
                itemsToShow.map(item => <ProductsCard
                 key={item.id}
                 item={item}
                 >

                </ProductsCard>)
            }
     
            
        </div>
        <div>
            {!showAll && (
         <button  onClick={() => setShowAll(true)} className="shop_now_btn lg:mt-20 flex  mx-auto text-center ">Load More</button>
      
                  
     )}
            </div>
      </div>
      
    </section>
  );
};

export default OurProducts;
// .slice(0, 8)