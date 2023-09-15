import PropTypes from 'prop-types';
import { StyledSection, StyledTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  console.log(title);
  console.log(children);
  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      <>{children}</>
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
