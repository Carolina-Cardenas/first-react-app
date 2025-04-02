import React, { useState } from "react";
import Counter from "./Counter";

function BookItems({ book }) {
  const [counter, setCounter] = useState(0);
  const maxLengthDesc = 100;
  const maxLengthTitle = 27;

  const [isExpanded, setIsExpanded] = useState(false);

  const handlerSeeMoreClick = () => {
    setIsExpanded(!isExpanded);
  };
  const shortenedTitle =
    book.title && book.title.length > maxLengthTitle
      ? isExpanded
        ? book.title
        : book.title.substring(0, maxLengthTitle) + "... "
      : book.title;

  const shortenedDesc =
    book.desc && book.desc.length > maxLengthDesc
      ? isExpanded
        ? book.desc
        : book.desc.substring(0, maxLengthDesc) + "... "
      : book.desc;

  return (
    <section className="booksContainer">
      <section className="booksItems">
        <h3 className="booksItems__title">
          {shortenedTitle}
          {book.title && book.title.length > maxLengthDesc && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={handlerSeeMoreClick}
            >
              {isExpanded ? "See less" : "See more..."}
            </span>
          )}
        </h3>

        <h4 className="booksItems__author">Av {book.author}</h4>
        <p className="booksItems__desc">
          {shortenedDesc}
          {book.desc && book.desc.length > maxLengthDesc && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={handlerSeeMoreClick}
            >
              {isExpanded ? "See less" : "See more..."}
            </span>
          )}
        </p>
        <p className="booksItems__type">{book.genre}</p>
        <Counter counter={counter} setCounter={setCounter} />
      </section>
    </section>
  );
}
export default BookItems;
