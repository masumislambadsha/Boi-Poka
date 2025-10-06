// import React, { use } from 'react';

import { Star } from "lucide-react";
import { Link } from "react-router";

const Book = ({singleBook}) => {


  const {bookName,author,image,category,rating,tags,bookId,totalPages } = singleBook

  return (
    <Link to={`/bookDetails/${bookId}`}>
    <div className="card bg-base-300 w-[320px] h-[510px] content-center md:w-96 shadow-sm border-1 border-gray-200 rounded-2xl px-3 pt-5 ">

    <img
    className="w-[160px] mx-auto h-[250px] rounded-xl"
      src={image}
      alt="Shoes" />


  <div className="card-body">
    <div className="flex gap-10 ml-2 mt-2 font-[500] text-lg text-[#23BE0A]">
       {
      tags.map((tag, ind)=> <h5 key={ind}>{tag}</h5>)
    }
    </div>

    <h2 className="card-title font-bold text-2xl font-serif text-[#131313] ">
      {bookName}

    </h2>
    <p className="font-medium opacity-80 text-lg text-[#131313] mb-3  ">By : {author}</p>
    <p className="font-medium opacity-80 text-lg text-[#131313] mb-3  ">Pages :  {totalPages}</p>

    <div className="card-actions justify-between border-t-1 border-dashed pt-4 border-gray-300">
      <div className="font-medium opacity-80 text-[17px]">{category}</div>
      <div className="flex gap-1 text-[17px]">{rating} <span className="opacity-70"><Star></Star></span> </div>
    </div>
  </div>
</div>
    </Link>
  );
};

export default Book;
