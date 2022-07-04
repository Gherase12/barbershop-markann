import React from "react";
import Review from "./Review";
import Marquee from "react-fast-marquee";
import { reviews } from './../data/reviews';

function Reviews() {
  
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-[700px] lg:w-[1150px] xl:w-[1400px]">
        
      <Marquee
      className=""
      pauseOnHover={true}
      gradient={false}
      >
        {reviews.map((r , i)=>(
          
        <Review key={i} review={r} />
        ))}
        
      </Marquee>
      </div>
    </div>
  );
}

export default Reviews;
