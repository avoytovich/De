const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Report = require('../models/Report');

/**
 *  Method: GET
 *  Route: reports/get
 *  get all reports
 */


/**
 *  Method: POST
 *  Route: report/create
 *  Create report
 */
router.post('/create', (req, res) => {
  new Report(req.body).save().then(report => res.json(report));
});

/**
 *  Method: PUT
 *  Route: report/edit
 *  Edit report
 */
router.put('/edit', (req, res) => {
  Report.updateOne(
    { _id: req.body._id },
    {
      reportData: req.body.reportData,
    },
    (err, report) => res.status(200).json(report),
  );
});

/**
 *  Method: DELETE
 *  Route: report/delete
 *  Delete report
 */
router.delete('/delete/:reportId', (req, res) => {
  console.log(req.params);
  Report.deleteOne({ _id: req.params.reportId }, (err, report) =>
    res.status(200).json(report),
  );
});

module.exports = router;
