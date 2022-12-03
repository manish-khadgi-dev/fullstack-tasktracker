import express from "express";

import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 8000;

//db connect
import mongoConnect from "./src/config/dbConfig.js";

mongoConnect();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routers
import taskRouters from "./src/ routers/taskRouters.js";

app.use("/api/v1/tasks", taskRouters);

//handle all uncaught router request
app.use("*", (res, req, next) => {
  const error = {
    code: 404,
    message: "404 Page Not Found",
  };
  next(error);
});

// global error handler
app.use((error, req, res, next) => {
  console.log(error);
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
