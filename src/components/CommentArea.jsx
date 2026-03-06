import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { useEffect, useState } from "react";

function CommentArea({ book }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${book.asin}/comments/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTliMWU1NWFmZWY0YzAwMTUwODI3OGMiLCJpYXQiOjE3NzE3NzM1MjUsImV4cCI6MTc3Mjk4MzEyNX0.Pvm2jIH-b0g5keKsQnfKQZrUNO8lhg-7BDKCo9Ihxbc",
          },
        },
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [book.asin]);

  return (
    <section className="comment-area mt-2">
      <h3 className="comment-title">Recensioni</h3>
      <AddComment asin={book.asin} />
      <CommentList comments={comments} />
    </section>
  );
}

export default CommentArea;
