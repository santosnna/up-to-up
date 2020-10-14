const AppModel = require("../models/App");

async function getAll() {
  return AppModel.find({});
}

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

module.exports = {
  getAll,
  getOne,
  create,
  update,
};
