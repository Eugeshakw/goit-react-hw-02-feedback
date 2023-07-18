import React from 'react';
import { feedbacks } from 'utils/utils';
import { nanoid } from 'nanoid';
const FeedBackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(feedbacks).map(feedback => (
        <button
          type="button"
          key={nanoid()}
          onClick={() => onLeaveFeedback(feedback)}
        >
          {feedback}
        </button>
      ))}
    </div>
  );
};

export default FeedBackOptions;
