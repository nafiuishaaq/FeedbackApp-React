import "./App.css";
// import Card from "./components/Card";
import Header from "./components/Header";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackData from "./components/FeedbackData";
import { useState } from "react";
import Card from "./components/shared/Card";
import FeedBackStat from "./components/FeedBackStat";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const title = "Feedback App";
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are sure you want to delete this rating?")) {
      const newFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(newFeedback);
    }
  };

  const averageRating =
    feedback.reduce((acc, item) => {
      return acc += item.rating;
    }, 0) / feedback.length;

  return (
    <div className="APP">
      <Header title={title} />
      <div className="container">
        <FeedbackForm/>
        <FeedBackStat feedback={feedback} averageRating={averageRating} />
        <Feedbacklist feedback={feedback} deleteFeedback={deleteFeedback} />
        <Card>This is coming firm</Card>
      </div>
    </div>
  );
}

export default App;
