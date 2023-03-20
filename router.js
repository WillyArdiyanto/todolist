const express = require('express');
const router = express.Router();
const contorller = require('./controller');

// Get all task
router.get("/", contorller.findAll);
// Create new task
router.post("/", contorller.create);
// Get task by Id
router.get("/:id", contorller.findById);
// Update task by id
router.put("/:id", contorller.update);
// Delete task by id
router.delete("/:id", contorller.delete);

module.exports = router;