const db = require("../models/database.js");

const ChartController = {
  getSampleData: (req, res) => {
    const query = 'SELECT f.`year`, a.gender, COUNT(a.gender) AS count_gender ' +
                  'FROM fact_table f JOIN actors a ON f.actor_id = a.id ' +
                  'WHERE f.`year` = 1980 ' +
                  'GROUP BY f.`year`, a.gender '

    db.query(query, (result) => {
      console.log('CONTROLLER: getSampleData()');
      console.log(result);
      res.status(200).json(result);
    });
  }
}

module.exports = ChartController;