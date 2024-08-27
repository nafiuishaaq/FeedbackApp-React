import React from "react";
import FeedbackItem from "./FeedbackItem";

const Feedbacklist = ({ feedback, deleteFeedback }) => {
  if (!feedback || feedback.lentgh === 0) {
    return <div>No feedback</div>;
  }

  //   console.log(feedback);
  const feedbackRating = feedback.map((list) => (
    <FeedbackItem key={list.id} list={list} deleteFeedback={deleteFeedback} />
  ));
  return <div>{feedbackRating}</div>;
};

export default Feedbacklist;
