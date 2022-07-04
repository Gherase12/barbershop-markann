import React from "react";
import { AiFillStar } from "react-icons/ai";

function Review({review}) {
  return (
    <div className='mx-[30px] my-[30px] border-[3px] border-galben rounded-[24px]  w-[400px] h-[200px] relative z-10 flex flex-col justify-center items-center space-y-[20px]'>
      <div className='bg-black  w-[164px] h-[40px] border-[3px] rounded-[24px] border-galben flex items-center justify-center absolute right-[118px] -top-[20px] z-30  '>
        {review.nume}
      </div>
      <div className='flex text-yellow-500'>
       {[...Array(review.rateing)].map(()=>(
        <AiFillStar />
       ))}
      </div>
      <p className="text-center  w-[350px] h-[120px] text-ellipsis overflow-hidden ">
       {review.text}
      </p>
    </div>
  );
}

export default Review;
