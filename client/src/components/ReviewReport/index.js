import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

/** Actions*/
import { editReport, onChange, deleteReport } from '../../redux/actions/report';

/** Components*/
import ReportStepper from '../Stepper';
import { ReportWrapper } from '../ReportProblem';

/** UI*/
import CheckIcon from '@material-ui/icons/CheckCircleOutline';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class ReviewReport extends PureComponent {
  edit = () => {
    const { report } = this.props;
    try {
      editReport(report);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const {
      report: {
        _id,
        reportData: { reportText, reportTitle },
      },
      onChange,
    } = this.props;
    return (
      <React.Fragment>
        <ReportStepper />
        <CheckIcon
          style={{ color: '#90ee90', fontSize: '55', marginBottom: '15' }}
        />
        <h2>Thank you for report</h2>
        <ReportWrapper>
          <TextField
            id="outlined-name"
            label="Report title"
            value={reportText}
            margin="normal"
            variant="outlined"
            style={{ width: '50%' }}
            onChange={e => onChange(e.target.value, 'reportData.reportText')}
          />
          <TextField
            id="outlined-multiline-static"
            label="Report Body"
            multiline
            rows="7"
            value="Text"
            margin="normal"
            variant="outlined"
            style={{ width: '50%' }}
            value={reportTitle}
            onChange={e => onChange(e.target.value, 'reportData.reportTitle')}
          />
          <div className="buttons">
            <Button variant="contained" color="primary" onClick={this.edit}>
              <EditIcon />
              Edit
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: 10 }}
              onClick={deleteReport(_id)}
            >
              <DeleteIcon />
              Delete
            </Button>
          </div>
        </ReportWrapper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ report }) => {
  return { report };
};

export default connect(
  mapStateToProps,
  { onChange },
)(ReviewReport);
