
function BookItems({ book }) {
    return (
      <section className="booksContainer">
    
          <section  className="booksItems">
            <h3 className="booksItems__title">{book.title}</h3>
            <h4 className="booksItems__author">Av {book.author}</h4>
            <p className="booksItems__desc">{book.desc}</p>
            <p className="booksItems__type">{book.genre}</p> 
            <button className="booksItems__button">Add to cart</button>
            </section>     
      </section>
    );
  }



export default BookItems

