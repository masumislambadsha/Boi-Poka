import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBooks } from "../../Utilitiy/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBooks();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id, 10));
    const myReadList = Array.isArray(data)
      ? data.filter((book) => convertedStoredBooks.includes(book.bookId))
      : [];
    setReadList(myReadList);
  }, [data]);

  const [sort, setSort] = useState("");
  const handleSort = (type) => {
    setSort(type);

    if (type === "Pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    }
    if (type === "Ratings") {
      const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRating);
    }
  };

  return (
    <div className="container mx-auto">
      <details className="dropdown">
        <summary className="btn m-1">Sort by : {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("Pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("Ratings")}>Ratings</a>
          </li>
        </ul>
      </details>
      <Tabs forceRenderTabPanel>
        <TabList>
          <Tab>Read Wish List</Tab>
          <Tab>Wish Book List</Tab>
        </TabList>

        <TabPanel>
          <h2>Books read {readList.length}</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-30">
            {readList.map((b) => (
              <Book key={b.bookId} singleBook={b}>
                {" "}
              </Book>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h2>Any content</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
