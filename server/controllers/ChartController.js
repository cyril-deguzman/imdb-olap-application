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
  },

  getMFRatio: (req, res) => {
    let toLabel = (row) => {
      row.x = row.x.toString();
    };

    let data = {
      male: [],
      female: [],
    };

    const mQuery ='SELECT 10*FLOOR((f.`year`)/10) AS x, COUNT(a.gender) AS y ' +
                  'FROM fact_table f JOIN actors a ON f.actor_id = a.id ' +
                  'WHERE gender = \'M\' ' +
                  'GROUP BY a.gender, x ' +
                  'ORDER BY x'
    
    const fQuery ='SELECT 10*FLOOR((f.`year`)/10) AS x, COUNT(a.gender) AS y ' +
                  'FROM fact_table f JOIN actors a ON f.actor_id = a.id ' +
                  'WHERE gender = \'F\' ' +
                  'GROUP BY a.gender, x ' +
                  'ORDER BY x'

    db.query(mQuery, (result) => {
      result.forEach(toLabel);
      data.male = result;

      db.query(fQuery, (result) => {
        result.forEach(toLabel);
        data.female = result;
        console.log(data);
        res.status(200).json(data);
      });
    });
  }, 

  getBestYears: (req, res) => {
    let toLabel = (row) => {
      row.x = row.x.toString();
    };

    const query = 'SELECT `year` as x, ROUND(AVG(`rank`), 2) AS y ' +
                  'FROM fact_table ' +
                  'WHERE `rank` IS NOT NULL ' +
                  'GROUP BY `year` ' +
                  'ORDER BY `year` ';
                  
    db.query(query, (result) => {
      result.forEach(toLabel);
      res.status(200).json(result);
    })
  },

  getDirGenre: (req, res) => {
    const query = 'SELECT m.genre AS x , ROUND(AVG(f.`rank`), 2) AS y ' +
                  'FROM fact_table f   JOIN directors d ON f.director_id = d.director_id ' +
                                      'JOIN movies_genres m ON f.movie_id = m.movie_id ' +
                  'WHERE d.director_id = 1102 AND `rank` IS NOT NULL ' +
                  'GROUP BY m.genre ' +
                  'ORDER BY x'
                  
    db.query(query, (result) => {
      res.status(200).json(result);
    })
  },

  getTopMusic: (req, res) => {
    const query = 'SELECT distinct f.`name` AS x, f.`rank` AS y ' +
                  'FROM fact_table f JOIN movies_genres m ON f.movie_id = m.movie_id ' +
                  'WHERE (f.`rank` >= 8) AND (m.genre = \'Musical\' OR m.genre = \'Music\') AND (f.`year` >= 1951 AND f.`year` <= 1960) ' +
                  'GROUP BY f.`name` '
                  'ORDER BY f.`rank` DESC'
                  
    db.query(query, (result) => {
      res.status(200).json(result);
    })
  },
}

module.exports = ChartController;