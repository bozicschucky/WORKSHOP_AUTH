const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  status: {type: String, default: "pending"},
});

TaskSchema.index({title: 'text'});

module.exports = mongoose.model('Task', TaskSchema);
