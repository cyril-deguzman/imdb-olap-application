const db = require("../models/database.js");

const ChartController = {
  getSampleData: (req, res) => {
    const query = 'SELECT count(*) AS total_count FROM fact_table'

    db.query(query, (result) => {
      console.log('CONTROLLER: getSampleData()');
      console.log(result);
      res.status(200).json(result);
    });
  }
}

module.exports = ChartController;