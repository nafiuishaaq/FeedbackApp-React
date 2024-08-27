import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ list, deleteFeedback }) => {
  const { id, rating, text } = list; // destructuring

  return (
    <Card reverse={false}>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;

