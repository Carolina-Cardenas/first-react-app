import BookItems from "./BookItems";
import books from "../assets/books.json";
import { v4 as uuidv4 } from "uuid";

function BookList() {
  return (
    <section className="booksList">
      <h1 className="booksList__title">Books</h1>
      <ul className="books__list">
        {books.map((book) => {
          let uniqueId = uuidv4();
          console.log(book.desc.length);
          return (
            <ol key={uniqueId}>
              <BookItems book={book} />
            </ol>
          );
        })}
      </ul>
    </section>
  );
}

export default BookList;
