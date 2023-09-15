import FeedbackOptions from 'components/Feedback/Feedback';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';

import React, { Component } from 'react';
import { Wrapper } from 'styles/App.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = e => {
    const stateName = e.target.name;
    this.setState(prev => ({
      [stateName]: prev[stateName] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0
      ? 0
      : Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const stateData = Object.keys(this.state);
    return (
      <Wrapper>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={stateData}
            onLeaveFeedback={this.onButtonClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              stats={this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </Wrapper>
    );
  }
}

export function strCapitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
