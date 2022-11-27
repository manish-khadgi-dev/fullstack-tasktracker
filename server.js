import express from "express";
const app = express();
const PORT = 8000;

//middlewares
app.use(express.json());

//routers
import taskRouters from "./src/ routers/taskRouters.js";

app.use("/ap1/v1/tasks", taskRouters);

//handle all uncaught router request
app.use("*", (res, req, next) => {
  //   res.status(400).json({
  //     status: "error",
  //     message: "404 Page Not Found",
  //   });

  const error = {
    status: 404,
    message: "404 Page Not Found",
  };
  next(error);
});

// global error handler
app.use((error, req, res, next) => {
  const statusCode = error.code || 500;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running ar http://localhost:${PORT}`);
});
