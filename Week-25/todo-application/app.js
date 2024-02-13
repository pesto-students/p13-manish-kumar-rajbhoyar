const express = require("express");
const bodyParser = require("body-parser");
const serveStatic = require("serve-static");

const app = express();

app.use(bodyParser.json());
app.use(serveStatic("public"));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

let todos = [];

//Display the list of tasks
app.get("/todos", (req, res) => {
  res.json(todos);
});

//View details of a specific task 
app.get("/todos/:id", (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === todoId);

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
  });

  //Add a new task
app.post("/todos", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const todo = {
    id: todos.length + 1,
    title: title,
    description: description,
    completed: false,
  };

  todos.push(todo);
  res.status(201).json(todo);
});

//Update a task's details
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const { title, description, completed } = req.body;

  todo.title = title || todo.title;
  todo.description = description || todo.description;
  todo.completed = completed !== undefined ? completed : todo.completed;
  res.json(todo);
});

//Delete a task
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todos.splice(index, 1);
  res.status(204).json({ message: "Task deleted successfully" });
});


app.use((req, res, next) => {
    res.status(404).send('Route Not Found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});