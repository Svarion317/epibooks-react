import { useEffect, useState } from "react";
import { useParams } from "react-router";
import books from "../books/fantasy.json";
import CommentArea from "../components/CommentArea";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BookDetail() {
  const { asin } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    const selectedBook = books.find((currentBook) => currentBook.asin === asin);
    setBook(selectedBook);
  }, [asin]);

  if (!book) return <Container className="my-4">Libro non trovato.</Container>;

  return (
    <Container className="detail-page">
      <Row className="g-4 align-items-start">
        <Col md={5} lg={4}>
          <Card className="detail-card">
            <Card.Img variant="top" src={book.img} alt={book.title} className="detail-cover" />
            <Card.Body>
              <Card.Title className="detail-title">{book.title}</Card.Title>
              <Card.Text className="detail-meta">Categoria: {book.category}</Card.Text>
              <Card.Text className="detail-meta mb-0">Prezzo: {book.price}$</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={7} lg={8}>
          <CommentArea book={book} />
        </Col>
      </Row>
    </Container>
  );
}

export default BookDetail;
