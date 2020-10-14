const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const appsService = require("./services/AppsService");

const routes = require("./routes");

const app = express();

let port = process.env.PORT;
if (port == null || port === "") {
  port = 3002;
}
// const port = 3002;

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./static")));

app.locals.pageTitle = "Up-to-Up";
app.locals.pageSlogan = "Renda extra com diversão!";

app.use(
  "/",
  routes({
    appsService,
  })
);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server started on port ${port}!`);
});
