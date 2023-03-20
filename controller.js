const Task = require("./model");

exports.findAll = function (req, res) {
    Task.findAll(function(err, task) {
        console.log("contorller");
        if (err) res.send(err);
        console.log("res", task);
        res.send(task);
    });
};

exports.create = function (req, res) {
    const new_task = new Task(req.body);
    //menghandle null error
    if(req.bofy.constructor === Object && Object. keys(req.body),length === 0) {
        res
        .status(400)
        .send({error: true, message: "Please provide all require fields!"});
    } else {
        Task.create(new_task, function(err, task) {
            if(err)res.send(err);
            res.json({
                error: false,
                message: "task added successfully!",
                data: task,
            })
        });    
    }
};

exports.findById = function (req, res) {
    Task.findAll(req.params.id, function(err, task) {
        if (err) res.send(err);
        //console.log("res", task);
        res.json(task);
    });
};

exports.update = function (req, res) {
    //menghandle null error
    if(req.bofy.constructor === Object && Object. keys(req.body),length === 0) {
        res
        .status(400)
        .send({error: true, message: "Please provide all require fields!"});
    } else {
        Task.update(req.params.id, new Task(req.body), function(err, task) {
            if(err)res.send(err);
            res.json({
                error: false,
                message: "task successfully updated!",
            });
        });    
    }
};

exports.delete = function (req, res) {
    Task.delete(req.params.id, function(err, task) {
        if (err) res.send(err);
        //console.log("res", task);
        res.json({
            error: false, message: "Task successfully deleted!"
        });
    });
};
