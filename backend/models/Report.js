const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  dateOfCreation: {
    type: String,
  },
  reportData: {
    reportTitle: {
      type: String,
    },
    reportText: {
      type: String,
      minlength: 3,
      maxlength: 1500,
    },
    googleMapsData: {
      type: String,
    },
  },
});

const Report = mongoose.model("report", reportSchema);
module.exports = Report;
