const fs = require("fs");
const util = require("util");
const AppModel = require("./App");

const readFile = util.promisify(fs.readFile);

async function getOne(appId) {
  return AppModel.findOne({ _id: appId });
}

async function create(data) {
  const app = new AppModel(data);
  return app.save();
}

async function update(appId, data) {
  const app = await getOne(appId);

  if (!app) throw new Error("App doesn't exist");

  Object.keys(data).forEach((key) => {
    app[key] = data[key];
  });

  return app.save();
}

async function getData() {
  const file = "./data/apps.json";
  const data = await readFile(file, "utf-8");
  return JSON.parse(data).apps;
}

async function getList() {
  const data = await getData();
  return data.map((app) => {
    return {
      name: app.name,
      image: app.image,
      promoCode: app.promoCode,
      playStoreLink: app.playStoreLink,
      appStoreLink: app.appStoreLink,
    };
  });
}

module.exports = {
  getList,
  create,
  update,
};
