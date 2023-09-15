import React from 'react';
import PropTypes from 'prop-types';
import { StyledList, Text } from './Statistics.styled';
import { strCapitalize } from 'App';

const Statistics = ({ stats, total, positivePercentage }) => {
  return (
    <>
      <StyledList>
        {stats.map(([key, value], idx) => (
          <li key={idx}>
            <span>{strCapitalize(key)}: </span>
            <span>{value}</span>
          </li>
        ))}
      </StyledList>
      <Text>
        <span>Total: </span>
        <span>{total()}</span>
      </Text>
      <Text>
        <span>Positive feedback: </span>
        <span>{positivePercentage()}%</span>
      </Text>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Statistics;
