// import React, { use } from 'react';

const Book = ({singleBook}) => {


  const {bookName,author,image,category,rating,tags} = singleBook

  return (
    <div className="card bg-base-100 w-96 shadow-sm border-1 border-gray-200 rounded-2xl px-3 pt-5 ">
  <figure>
    <img
    className="w-[160px] h-[250px] rounded-xl"
      src={image}
      alt="Shoes" />
  </figure>

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
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}</div>
    </div>
  </div>
</div>
  );
};

export default Book;
