const mongoose = require("mongoose");
const express = require("express");
const request = require("request");
const router = express.Router();
const Report = require("../models/Report");

/**
 *  Method: GET
 *  Route: reports/all
 *  Get all reports
 */
router.get("/all", (req, res) => {
  Report.find({}, function(err, reports) {
    res.status(200).json(reports);
  });
});

module.exports = router;
