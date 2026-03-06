import { ListGroup } from "react-bootstrap";

function SingleComment({ comment }) {
  return (
    <ListGroup.Item className="comment-item">
      <div className="d-flex justify-content-between align-items-start gap-3">
        <p className="mb-0">{comment.comment}</p>
        <span className="rate-badge">{comment.rate}/5</span>
      </div>
    </ListGroup.Item>
  );
}

export default SingleComment;
