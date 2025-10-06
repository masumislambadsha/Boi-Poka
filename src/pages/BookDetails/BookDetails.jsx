import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utilitiy/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData(); // preloaded list from loader [web:4]

  const singleBook = data.find((b) => b.bookId === parseInt(id, 10)); // simple match [web:4]
  if (!singleBook) return null; // basic guard [web:4]

  const {
    bookName,
    author,
    image,
    category,
    rating,
    tags = [],
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
    MySwal.fire({
      title: <p>Hello World</p>,
      didOpen: () => {
        // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        MySwal.showLoading();
      },
    }).then(() => {
      return MySwal.fire(<p>Shorthand works too</p>);
    });
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <img
              src={image}
              alt={bookName}
              className="md:h-full md:w-[425px] object-cover rounded-md shadow-lg"
            />
            {/* subtle base shadow */}
            <div className="absolute -z-10 -left-4 -bottom-4 md:h-[576px] md:w-[425px] bg-slate-100 rounded-md"></div>
          </div>
        </div>

        {/* Right: details card */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 md:p-8">
          <h1 className="font-serif font-extrabold text-3xl md:text-4xl text-slate-900">
            {bookName}
          </h1>

          <p className="mt-2 text-slate-600">
            By : <span className="text-slate-800">{author}</span>
          </p>

          <p className="mt-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
            {category}
          </p>

          {/* review */}
          <div className="mt-6 border-t border-slate-200 pt-6">
            <p className="text-slate-900 font-semibold">
              Review :
              <span className="ml-2 font-normal text-slate-700 leading-relaxed">
                {review}
              </span>
            </p>
          </div>

          {/* tags */}
          <div className="mt-6 border-t border-slate-200 pt-6">
            <div className="flex items-center gap-3">
              <span className="text-slate-900 font-semibold">Tag</span>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full text-md font-medium opacity-90 text-[#23BE0A] px-3 py-1"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* meta grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-500">Number of Pages:</span>
              <span className="font-medium">{totalPages}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-500">Publisher:</span>
              <span className="font-medium">{publisher}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-500">Year of Publishing:</span>
              <span className="font-medium">{yearOfPublishing}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-500">Rating:</span>
              <span className="font-medium">{rating}</span>
            </div>
          </div>

          {/* actions */}
          <div className="mt-8 flex md:gap-4">
            <button
              onClick={() => handleMarkAsRead(id)}
              className="btn px-6 py-3 rounded-lg"
            >
              Mark as Read
            </button>
            <button className="btn bg-[#59C6D2] border-0 text-white hover:opacity-90 md:px-6 py-3 rounded-lg">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
