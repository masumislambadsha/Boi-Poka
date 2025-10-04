import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

  return (
    <div className=' container mx-auto mt-20'>
      <h3 className='font-serif text-4xl text-[#131313] font-bold text-center'>Books</h3>
      <div className='max-w-[1300] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-15 justify-items-center md:px-30 space-y-10'>
      <Suspense fallback={"loading"}>
        {
          data.map(singleBook => <Book
           key={singleBook.bookId} singleBook={singleBook}></Book>)
        }
      </Suspense>
      </div>
    </div>
  );
};

export default Books;
