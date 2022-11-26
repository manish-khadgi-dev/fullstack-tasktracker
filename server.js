import express from "express";
const app = express();
const PORT = 8000;

//routers
import taskRouters from "./src/ routers/taskRouters.js";

app.use("/ap1/v1/tasks", taskRouters);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running ar http://localhost:${PORT}`);
});
