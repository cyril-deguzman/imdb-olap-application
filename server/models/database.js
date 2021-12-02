const mysql = require('mysql');

const db = {
  connection: null,

  /* Connects to a locally hosted MYSQL database */
  connect: () => {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "ethan211",
      database: "mco1_datawarehouse"
    })

    this.connection.connect(function(err){
      if(err) throw err;
      console.log("connected!");
    })
  },

  query: (sql) => {
    this.connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Result: ", result);
    })
  },
}

module.exports = db;