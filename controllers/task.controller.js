const Task = require('../models/Task');

module.exports = {
  create: (req, res) => {
    // validate
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
    });

    task.save((err) => {
      if (err) console.log(err);
      return res.json({
        "message": "Created successfully",
        task: task
      })
    });
  },

  list: (req, res) => {
    Task.find({}, (err, tasks) => {
      if (err) console.log(err);
      return res.json({tasks: tasks})
    });
  },

  get: (req, res) => {
    Task.findOne({_id: req.params.id}, (err, task) => {
      if (err) console.log(err);
      return res.json({task: task})
    });
  },

  update: (req, res) => {
    Task.findOne({_id: req.params.id}, (err, task) => {
      if (err) console.log(err);
      task.title = req.body.title;
      task.description = req.body.description;
      task.save();
      return res.json({
        message: "Updated task successfully successfully",
        task: task
      })
    });
  },

  delete: (req, res) => {
    const id = req.params.id;

    Task.findOneAndDelete({_id: id}, (err) => {
      if (err) console.log(err);
      return res.json({message: "Deleted task successfully"})
    });
  },

  search: (req, res) => {
    const query = req.query.q;
    // simple searching
    // Task.find({title: query}, (err, tasks) => {
    //   return res.json({
    //     tasks: tasks
    //   })
    // })

    // searching with indexing
    // Task.find({$text: {$search: query}}, (err, tasks) => {
    //     return res.json({
    //       tasks: tasks
    //     })
    // })

    // fuzzy search with regex
    // poses a security problem ReDoS - note the use of escapeRegExp()
    const regex = new RegExp(escapeRegExp(query), 'gi');
    Task.find({$or: [{title: {$regex: regex}}, {description: {$regex: regex} }]}, (err, tasks) => {
      if (err) console.log(err);
      return res.json(tasks)
    })
  }
};

// https://stackoverflow.com/questions/3115150/how-to-escape-regular-expression-special-characters-using-javascript?answertab=votes#tab-top
const escapeRegExp = (query) => {
  return query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};
