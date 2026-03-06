import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function AddComment({ asin }) {
  const [formData, setFormData] = useState({
    comment: ``,
    rate: ``,
    elementId: asin,
  });
  const [submitMessage, setSubmitMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      elementId: asin,
    }));
  }, [asin]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTliMWU1NWFmZWY0YzAwMTUwODI3OGMiLCJpYXQiOjE3NzE3NzM1MjUsImV4cCI6MTc3Mjk4MzEyNX0.Pvm2jIH-b0g5keKsQnfKQZrUNO8lhg-7BDKCo9Ihxbc",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error(`Errore HTTP: ${response.status}`);
      }

      setSubmitMessage({
        type: "success",
        text: "Commento inviato correttamente.",
      });
      setFormData({
        comment: "",
        rate: "",
        elementId: asin,
      });
    } catch (error) {
      console.log(error);
      setSubmitMessage({
        type: "danger",
        text: "Invio commento fallito. Riprova.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-2 comment-form">
      <Row className="g-2">
        <Form.Group as={Col} xs={12} md={8} controlId="comment">
          <Form.Label className="mb-1">Commento</Form.Label>
          <Form.Control
            className="comment-input"
            required
            type="text"
            size="sm"
            name="comment"
            placeholder="Scrivi la tua recensione..."
            value={formData.comment}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} xs={12} md={4} controlId="rate">
          <Form.Label className="mb-1">Voto</Form.Label>
          <Form.Control
            className="comment-input"
            required
            type="number"
            min={1}
            max={5}
            size="sm"
            name="rate"
            placeholder="1-5"
            value={formData.rate}
            onChange={handleChange}
          />
        </Form.Group>
        <Col xs={12}>
          <Button
            type="submit"
            size="sm"
            className="submit-comment-btn"
            variant="light"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Invio in corso..." : "Invia commento"}
          </Button>
        </Col>
        {submitMessage && (
          <Col xs={12}>
            <div className={`small feedback-msg feedback-${submitMessage.type}`}>
              {submitMessage.text}
            </div>
          </Col>
        )}
      </Row>
    </Form>
  );
}

export default AddComment;
