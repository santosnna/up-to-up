const express = require("express");
const path = require("path");

const AppsService = require("./services/AppsService");

const appsService = new AppsService("./data/apps.json");

const routes = require("./routes");

const app = express();

let port = process.env.PORT;
if (port == null || port === "") {
  port = 3002;
}
// const port = 3002;

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
