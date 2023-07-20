import React from 'react';
import { feedbacks } from 'utils/utils';
import { nanoid } from 'nanoid';
import style from './feedbackOption.module.scss'
const FeedBackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={style.containerbtn}>
      {Object.keys(feedbacks).map(feedback => (
        <button
          className={style.btnfeedback}
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
