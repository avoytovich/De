import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

/** Actions*/
import { updateStep } from '../../../redux/actions/stepper';

/** Config*/
import { history } from '../../../index';

/** UI*/
import { Button } from '@material-ui/core';
import {
  getAllReports,
  getAllReportsPagination,
  getUsers,
} from '../../../redux/actions/report';

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

const Report = styled.div`
  margin: 5px;
  width: 50%;
  border: 1px solid gray;
`;

const Paragraph = styled.div`
  padding 5px;
  font-size: 20px;
  font-family: Muli;
`;

class LoggedContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: {},
      page: 1,
    };
  }

  componentDidMount() {
    const { getAllReportsPagination, getUsers } = this.props;
    const { page } = this.state;
    //getAllReports();
    getAllReportsPagination(page);
    getUsers();
  }

  getUserInfo = id => {
    const {
      loggedContent: { data },
    } = this.props;
    const filter = data.filter(data => {
      return data.id == id;
    });
    return filter[0];
  };

  render() {
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    const {
      updateStep,
      getUserById,
      loggedContent: { reports },
    } = this.props;
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
        <h3>Dentists Reports</h3>
        {reports &&
          reports.map((report, index) => (
            <Report key={index}>
              <Paragraph>{`Title: ${report.reportData.reportTitle}`}</Paragraph>
              <Paragraph>{`Text: ${report.reportData.reportText}`}</Paragraph>
              <Paragraph>
                <Avatar src={this.getUserInfo(report.userId).photo} />
                {`Posted by: ${this.getUserInfo(report.userId).fullName}`}
              </Paragraph>
            </Report>
          ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedContent: state.report,
  };
};

export default connect(
  mapStateToProps,
  { updateStep, getAllReportsPagination, getUsers },
)(LoggedContent);
