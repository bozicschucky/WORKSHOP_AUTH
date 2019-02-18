const tasks = require("../controllers/task.controller");
const authenticate = require("../middleware/authenticate");

module.exports = app => {
	app.post("/api/tasks", authenticate, tasks.create);
	app.get("/api/tasks", tasks.list);
	app.get("/api/tasks/:id", tasks.get);
	app.put("/api/tasks/:id", authenticate, tasks.update);
	app.delete("/api/tasks/:id", authenticate, tasks.delete);
	app.get("/api/search/tasks", authenticate, tasks.search);
};
