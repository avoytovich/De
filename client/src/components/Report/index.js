import React, { Component } from 'react';
import styled from 'styled-components';

import { getAllReports, getUsers } from '../../redux/actions/report';
import { connect } from 'react-redux';

const Reports = styled.div`
  margin: 5px;
  width: 50%;
  border: 1px solid gray;
`;

const Paragraph = styled.div`
  padding 5px;
  font-size: 20px;
  font-family: Muli;
`;

const Avatar = styled.img.attrs({
  src: props => props.src,
})`
  border-radius: 50%;
  height: 50px;
  margin-right: 10px;
`;

class Report extends Component {
  componentDidMount() {
    const { getAllReports, getUsers } = this.props;
    getAllReports();
    getUsers('exclusive');
  }

  getUserInfo = id => {
    const { reportContent } = this.props;
    if (reportContent.dataUsers) {
      return reportContent.dataUsers.filter(data => data.id === id)[0];
    }
  };

  getReport = () => {
    const {
      match: { params },
      reportContent,
    } = this.props;
    if (reportContent.data) {
      return reportContent.data.filter(data => data._id === params.id);
    }
  };

  render() {
    console.log('this.props', this.props);
    const { reportContent } = this.props;
    return (
      <React.Fragment>
        <h3>Dentists Report</h3>
        {reportContent.data &&
          reportContent.dataUsers &&
          this.getReport().map((report, index) => (
            <Reports key={index}>
              <Paragraph>{`Title: ${report.reportData.reportTitle}`}</Paragraph>
              <Paragraph>{`Text: ${report.reportData.reportText}`}</Paragraph>
              <Paragraph>
                <Avatar src={this.getUserInfo(report.userId).photo} />
                {`Posted by: ${this.getUserInfo(report.userId).fullName}
               on ${report.dateOfCreation}`}
              </Paragraph>
            </Reports>
          ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    reportContent: state.report,
  };
};

export default connect(
  mapStateToProps,
  { getAllReports, getUsers },
)(Report);
