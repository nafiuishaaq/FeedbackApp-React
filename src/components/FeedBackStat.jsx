import React from "react";

const FeedBackStat = ({ feedback, averageRating }) => {
  return (
    <div className="feedback-stats">
      <h4>({feedback.length}) Feedback</h4>
      <h4>Average rating: ({feedback.length === 0 ? 0 : averageRating})</h4>
    </div>
  );
};

export default FeedBackStat;
