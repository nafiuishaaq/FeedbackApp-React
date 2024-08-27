import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [btndisabled, setBtndisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const handleChange = (e) => {
    setText(e.target.value);
    if (text.length >= 10) {
      setBtndisabled(false);
    } else {
      setBtndisabled(true);
    }
  };
  return (
    <div>
      <Card>
        <form action="">
          <h2>How would you rate our service?</h2>
          <RatingSelect/>
          <div className="input-group">
            <input
              type="text"
              placeholder="Write a review"
              value={text}
              onChange={handleChange}
            />
            <Button isDisable={btndisabled}>Send</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default FeedbackForm;
