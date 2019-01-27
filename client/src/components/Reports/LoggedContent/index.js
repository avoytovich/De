import React, { PureComponent } from 'react';
import styled from 'styled-components';

/** Config*/
import { history } from '../../../index';

/** UI*/
import { Button } from '@material-ui/core';

const Avatar = styled.img.attrs({
  src: props => props.src,
})`
  border-radius: 50%;
  height: 50px;
  margin-right: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

class LoggedContent extends PureComponent {
  render() {
    const userData = JSON.parse(localStorage.getItem('user'));
    return (
      <React.Fragment>
        <Wrapper>
          <Avatar src={userData.photo} />
          <h3>{`Welcome, ${userData.fullName}`}</h3>
        </Wrapper>
        <Button
          variant="contained"
          color="primary"
          style={{ width: '15%' }}
          onClick={() => history.push('/report-problem')}
        >
          Post report
        </Button>
      </React.Fragment>
    );
  }
}

export default LoggedContent;
