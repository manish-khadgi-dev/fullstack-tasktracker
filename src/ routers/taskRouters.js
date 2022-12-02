import express, { application } from "express";
import {
  deleteManyTask,
  getTasks,
  insertTask,
  updateTask,
} from "../models / task/TaskModel.js";
const router = express.Router();

// delete the fake database wehn integrate with database
// let fakeDb = [{ _id: 1, task: "watching TV", hr: 40, type: "entry" }];

//routers

router.get("/", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.json({
      status: "success",
      message: "List of the tasks",
      tasks,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    //run the db query to add to db
    // fakeDb.push(data);

    const result = await insertTask(req.body);
    if (result?._id) {
      return res.json({
        status: "success",
        message: "adding data to the db",
      });
    }
    res.json({
      status: "success",
      message: "Error data to the db",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});

router.patch("/", async (req, res, next) => {
  try {
    const { _id, type } = req.body;
    const task = await updateTask(_id, type);
    console.log(task);

    if (task?._id) {
      res.json({
        status: "success",
        message: "updating data to the db",
      });
    }

    res.json({
      status: "error",
      message: "Unable to switch the task, try again later",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

//use single item to delete
// router.delete("/:_id", (req, res, next) => {

//use multiple item to delete
router.delete("/", async (req, res, next) => {
  const _idArg = req.body;
  console.log(_idArg);

  const result = await deleteManyTask(_idArg);
  try {
    if (result?.deletedCount) {
      res.json({
        status: "success",
        message: "deleted successfully",
      });
    }

    res.json({
      status: "success",
      message: "Unable to deleted successfully",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});

export default router;
