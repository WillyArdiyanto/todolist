//import koneksi DB dari db.js
var dbConn = require('./db');

//membuat object baru, task
var Task = function (todo) {
    this.name = todo.name;
    this.time = todo.time;
    this.status = todo.status ? todo.status : 0;
};

//membuat task baru
Task.create = function (newTask, result) {
    dbConn.query("INSERT INTO task set ?", newTask, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err,null);
        }else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

//menampilkan semua task
Task.findAll = function (result) {
    dbConn.query("SELECT * FROM task", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err,null);
        }else{
            console.log("Task : ", res);
            result(null, res);
        }
    });
};

//menampilkan task berdasar Id
Task.findById = function (id, result) {
    dbConn.query("SELECT * FROM task WHERE id = ?", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err,null);
        }else{
            result(null, res);
        }
    });
};

//Update task 
Task.update = function (id, task, result) {
    dbConn.query(
        "UPDATE task SET name=?, time=?, status=? WHERE id = ?",
        [Task.name, Task.time, Task.status, id],
         function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err,null);
        }else{
            result(null, res);
        }
    });
};

//delete task 
Task.delete = function (id, result) {
    dbConn.query(
        "DELETE FROM task WHERE id = ?",
        [id],
        function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err,null);
        }else{
            result(null, res);
        }
    });
};

module.exports = Task;