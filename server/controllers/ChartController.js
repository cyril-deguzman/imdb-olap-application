const db = require("../models/database.js");

const ChartController = {
  getSampleData: (req, res) => {
    const query = req.body

    db.query(query, (result) => {
      
    });
  }
}

module.exports = ChartController;