const mysql = require('mysql');

const db = {
  connection: null,
  /**
   * Connects to a locally hosted MYSQL database
   */
  connect: () => {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "ethan211"
    })

    this.connection.connect(function(err){
      if(err) throw err;
      console.log("connected!");
    })
  },
}

module.exports = db;