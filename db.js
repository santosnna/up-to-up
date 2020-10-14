const mongoose = require("mongoose");
const { db } = require("./App");
const appService = require("./AppService");

const dsn =
  "mongodb+srv://uptoup:ponterasa165@uptoup.3s1kf.mongodb.net/uptoup?retryWrites=true&w=majority";
// const dsn = "mongodb://localhost:37017/uptoup";

mongoose
  .connect(dsn, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Succesfully connected to MongoDB");
  });

async function populate() {
  try {
    const list = await appService.getList();
    list.forEach((app) => {
      appService.create(app);
    });
  } catch (err) {
    console.log(err);
  }
}

populate();
