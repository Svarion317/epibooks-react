import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import CommentArea from "./CommentArea";

function SingleBooks({ book, selectedAsin, setSelectedAsin }) {
  const selected = selectedAsin === book.asin;
  const navigate = useNavigate();
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card className={`book-card h-100 ${selected ? "is-selected" : ""}`}>
        <Card.Img
          className="book-cover"
          variant="top"
          src={book.img}
          onClick={() =>
            setSelectedAsin((prev) => (prev === book.asin ? null : book.asin))
          }
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="book-title">{book.title}</Card.Title>
          <p className="book-price mb-3">{book.price}$</p>
          <Button
            className="detail-btn mt-auto"
            onClick={() => navigate(`/${book.asin}`)}
            size="sm"
            variant="light"
          >
            Dettagli
          </Button>
        </Card.Body>
        <ListGroup className="list-group-flush details-list">
          <ListGroup.Item>Category: {book.category}</ListGroup.Item>
          <ListGroup.Item>ASIN: {book.asin}</ListGroup.Item>
          <ListGroup.Item>
            {selected && (
              <div className="comment-inline">
                <CommentArea book={book} />
              </div>
            )}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
}

export default SingleBooks;
