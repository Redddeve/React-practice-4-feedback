import FeedbackOptions from 'components/Feedback/Feedback';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';

import React, { useState } from 'react';
import { Wrapper } from 'styles/App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = e => {
    const stateName = e.target.name;
    switch (stateName) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        console.error('Nothing');
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() === 0
      ? 0
      : Math.round((good / countTotalFeedback()) * 100);
  };

  const stateData = { good, neutral, bad };

  return (
    <Wrapper>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(stateData)}
          onLeaveFeedback={onButtonClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            stats={Object.entries(stateData)}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </Wrapper>
  );
};

export default App;

export function strCapitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
