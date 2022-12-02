import mongoose from "mongoose";

// Schema is also a validator

const mongoConnect = async () => {
  try {
    const dbUrl = "mongodb://localhost/task-tracker-db";
    const conn = await mongoose.connect(dbUrl);

    conn ? console.log("Mongo Connected") : console.log(error);
  } catch (error) {
    console.log(error);
  }
};

export default mongoConnect;

// const taskSchema = new mongoose.Schema(
//   {
//     task: {
//       type: String,
//     },
//     hr: {
//       type: Number,
//     },
//     type: {
//       type: String,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.model("Task", taskSchema); // tasks
