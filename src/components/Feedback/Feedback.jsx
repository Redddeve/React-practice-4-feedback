import React from 'react';
import PropTypes from 'prop-types';
import { BtnBox, Button } from './Feedback.styled';
import { strCapitalize } from 'App';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnBox>
      {options.map((option, idx) => (
        <Button onClick={onLeaveFeedback} key={idx} name={option}>
          {strCapitalize(option)}
        </Button>
      ))}
    </BtnBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
