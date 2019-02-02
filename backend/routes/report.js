const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Report = require('../models/Report');

/**
 *  Method: POST
 *  Route: /facebook
 *  Auth with facebook
 */
router.post('/create', (req, res) => {
  new Report(req.body).save().then(report => res.json(report));
});

router.put('/edit', (req, res) => {
  Report.updateOne(
    { _id: req.body._id },
    {
      reportData: req.body.reportData,
    },
    (err, report) => res.status(200).json(report),
  );
});

router.delete('/delete/:reportId', (req, res) => {
  console.log(req.params);
  Report.deleteOne({ _id: req.params.reportId }, (err, report) =>
    res.status(200).json(report),
  );
});

module.exports = router;
