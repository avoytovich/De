import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

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

import './loggedContent.css';

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
      perPage: 3,
    };
  }

  componentDidMount() {
    const { getAllReportsPagination, getUsers } = this.props;
    const { page } = this.state;
    //getAllReports();
    getAllReportsPagination(page);
    getUsers('exclusive');
  }

  getUserInfo = id => {
    const { loggedContent } = this.props;
    return (
      loggedContent.dataUsers &&
      loggedContent.dataUsers.filter(data => data.id === id)[0]
    );
  };

  handlePageClick = data => {
    const { getAllReportsPagination } = this.props;
    const { perPage } = this.state;

    let selected = ++data.selected;
    let offset = Math.ceil(selected * perPage);

    this.setState({ offset: offset }, () => {
      getAllReportsPagination(selected);
    });
  };

  render() {
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    const {
      updateStep,
      getUserById,
      loggedContent,
      loggedContent: { reports, data },
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
        {loggedContent.reports &&
          loggedContent.dataUsers &&
          loggedContent.reports.map((report, index) => (
            <Report key={index}>
              <Paragraph>{`Title: ${report.reportData.reportTitle}`}</Paragraph>
              <Paragraph>{`Text: ${report.reportData.reportText}`}</Paragraph>
              <Paragraph>
                <Avatar src={this.getUserInfo(report.userId).photo} />
                {`Posted by: ${this.getUserInfo(report.userId).fullName}
                 on ${report.dateOfCreation}`}
              </Paragraph>
              <div className="detail-info">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => history.push(`/report/${report['_id']}`)}
                >
                  Detail Info
                </Button>
              </div>
            </Report>
          ))}
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={loggedContent.pages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
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
