const tasks = require('../controllers/task.controller');

module.exports = (app) => {
  app.post('/api/tasks', tasks.create);
  app.get('/api/tasks', tasks.list);
  app.get('/api/tasks/:id', tasks.get);
  app.put('/api/tasks/:id', tasks.update);
  app.delete('/api/tasks/:id', tasks.delete);
  app.get('/api/search/tasks', tasks.search)
};
