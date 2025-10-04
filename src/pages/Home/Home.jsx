import Banner from "../../components/Header/Banner/Banner";
import Books from "../Books/Books";
import Book from "../Book/Book";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData()


  //  useEffect(()=>{
  //   fetch('booksData.json')
  //   .then(res => res.json())
  //   .then(data=> {
  //     setAllBooks(data)})
  //  },[])

  // const bookPromise = fetch("booksData.json").then((res) => res.json());

  return (
    <div>
      <Banner></Banner>
      <Books data={data}></Books>

    </div>
  );
};

export default Home;
