const mongoose = require('mongoose');
const express = require('express');
const request = require('request');
const router = express.Router();
const Report = require('../models/Report');
const User = require('../models/User');

/**
 *  Method: GET
 *  Route: reports/all
 *  Get all reports
 */
router.get('/all', (req, res) => {
  Report.find({}, function(err, reports) {
    res.status(200).json(reports);
  });
});

router.get('/all/:page', (req, res, next) => {
  const perPage = 3;
  const page = req.params.page || 1;

  Report.find({})
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec((err, reports) => {
      Report.count().exec((err, count) => {
        if (err) return next(err);
        res.status(200).json({
          reports: reports,
          current: page,
          pages: Math.ceil(count / perPage),
        });
      });
    });
});

router.get('/users', (req, res, next) => {
  User.find({}, function(err, doc) {
    if (err) return next(err);
    res.status(200).send(doc);
  });
});

module.exports = router;
