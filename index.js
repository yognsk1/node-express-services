const Express = require("express");
const Joi = require("joi");

const app = Express();
app.use(Express.json());

// Database.
const courses = [
  { id: 1, name: "Course_1" },
  { id: 2, name: "Course_2" },
];

app.get("/", (req, res) => {
  res.send("Connected to the 'node-express-demo' application...");
});

// Get all courses list.
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

// Get a specific course
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id == req.params.id);

  if (!course)
    return res.status(404).send("Requested course is not available..!");

  res.send(course);
});

// Add new course
app.post("/api/courses", (req, res) => {
  const name = req.body.name;
  const isCourse = courses.find((c) => c.name == name);

  if (isCourse) return res.status(400).send(`"${name}" is already present.`);

  const C = { id: courses.length + 1, name: name };
  courses.push(C);
  res.send(C);
});

// Update a course
app.put("/api/courses/update", (req, res) => {
  const { name, id } = req.body;
  const course = courses.find((c) => c.id == id);

  if (!course)
    return res.status(400).send(`Requested course is not available..!`);

  course.name = name;
  res.send(course);
});

// Delete a course
app.delete("/api/courses/delete", (req, res) => {
  const { id } = req.body;
  const course = courses.find((c) => c.id == id);

  if (!course)
    return res.status(400).send(`Requested course is not available..!`);

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

// Listen application
app.listen(3000, () => console.log("Listening on port 3000..."));
