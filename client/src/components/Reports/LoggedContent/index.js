import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

/** Actions*/
import { updateStep } from '../../../redux/actions/stepper';

/** Config*/
import { history } from '../../../index';

/** UI*/
import { Button } from '@material-ui/core';
import { getAllReports } from '../../../redux/actions/report';

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

class LoggedContent extends Component {
  componentDidMount() {
    getAllReports();
  }

  render() {
    const { updateStep } = this.props;
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
          onClick={() => updateStep(2, userData.id)}
        >
          Post report
        </Button>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { updateStep },
)(LoggedContent);
