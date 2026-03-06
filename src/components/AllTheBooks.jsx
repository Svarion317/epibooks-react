import fantasyBooks from "../books/fantasy.json";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBooks from "./SingleBooks";

function BookGrid({ searchText }) {
  const [selectedAsin, setSelectedAsin] = useState(null);
  const filteredBooks = fantasyBooks.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <Container className="catalog-section">
      <div className="catalog-head">
        <h2 className="catalog-title mb-1">Catalogo Fantasy</h2>
        <p className="catalog-meta mb-0">{filteredBooks.length} libri trovati</p>
      </div>
      <Row className="g-4">
        {filteredBooks.map((book) => (
          <SingleBooks
            key={book.asin}
            book={book}
            selectedAsin={selectedAsin}
            setSelectedAsin={setSelectedAsin}
          />
        ))}
      </Row>
    </Container>
  );
}

export default BookGrid;
