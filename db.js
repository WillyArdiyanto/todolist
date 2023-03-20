const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
    host        :'localhost',
    // host        :'localhost:3308', jika port sudah diubah tampilkan port ubahannya
    user        :'root',
    password    :'',
    database    :'todolist'
});

dbConn.connect(function(err) {
    if(err) throw err;
    console.log("Database connected!");
});

module.export = dbConn;