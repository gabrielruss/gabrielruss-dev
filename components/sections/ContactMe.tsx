import styled from 'styled-components';

import StyledContainer from '../styles/StyledContainer';
import Header from '../common/Header';
import StyledBorderContainer from '../styles/StyledBorderContainer';

const StyledContactMe = styled.div`
  z-index: 9999;
`;

function ContactMe() {
  return (
    <StyledContainer>
      <StyledContactMe>
        <StyledBorderContainer>
          <Header size="medium">Thank you</Header>
        </StyledBorderContainer>
      </StyledContactMe>
    </StyledContainer>
  );
}

export default ContactMe;
