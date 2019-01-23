import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  border-bottom: 1px solid;
  text-align: center;
`;

const Header = () => (
  <HeaderWrapper>
    <h1>Share your doctor problems</h1>
  </HeaderWrapper>
);

export default Header;
