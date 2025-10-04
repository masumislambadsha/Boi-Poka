import { Suspense, useEffect, useState } from "react";
import Banner from "../../components/Header/Banner/Banner";
import Books from "../Books/Books";
import Book from "../Book/Book";
import { useLoaderData } from "react-router";

const Home = () => {
  const [allBooks, setAllBooks] = useState([]);

  const data = useLoaderData()
  console.log(data);


  //  useEffect(()=>{
  //   fetch('booksData.json')
  //   .then(res => res.json())
  //   .then(data=> {
  //     setAllBooks(data)})
  //  },[])

  const bookPromise = fetch("booksData.json").then((res) => res.json());

  return (
    <div>
      <Banner></Banner>
      <Books></Books>
      <Suspense fallback={"loading"}>
        <Book
        bookPromise={bookPromise}
        ></Book>
      </Suspense>
    </div>
  );
};

export default Home;
