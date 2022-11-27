import express, { application } from "express";
const router = express.Router();

// delete the fake database wehn integrate with database
let fakeDb = [{ _id: 1, task: "watching TV", hr: 40, type: "entry" }];

//routers

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "List of the tasks",
    fakeDb,
  });
});

router.post("/", (req, res, next) => {
  try {
    const data = req.body;

    //run the db query to add to db
    fakeDb.push(data);

    res.json({
      status: "success",
      message: "adding data to the db",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});

router.patch("/", (req, res, next) => {
  const { _id, type } = req.body;
  try {
    // ****** update

    fakeDb = fakeDb.map((item) => {
      if (item._id === _id) {
        item.type = type;
      }
      return item;
    });
    res.json({
      status: "success",
      message: "updating data to the db",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

//use single item to delete
// router.delete("/:_id", (req, res, next) => {

//use multiple item to delete
router.delete("/", (req, res, next) => {
  const _idArg = req.body;
  console.log(_idArg);

  //replace following code by calling db functions
  // fakeDb = fakeDb.filter((item) => item._id != _id);
  fakeDb = fakeDb.filter(({ _id }) => !_idArg.includes(_id));
  try {
    res.json({
      status: "success",
      message: "deleted successfully",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});

export default router;
