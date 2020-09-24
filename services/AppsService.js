const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class AppsServices {
  constructor(datafile) {
    this.datafile = datafile;
  }

  async getApp(name) {
    const data = await this.getData();
    const app = data.find((elm) => {
      return elm.name === name;
    })
    if (!name) return null;
    return {
      name: app.name,
      image: app.image,
      promoCode: app.promoCode,
      playStoreLink: app.playStoreLink,
      appStoreLink: app.appStoreLink
    }
  }

  async getList() {
    const data = await this.getData();
    return data.map((app) => {
      return {
        name: app.name,
        image: app.image,
        promoCode: app.promoCode,
        playStoreLink: app.playStoreLink,
        appStoreLink: app.appStoreLink
      }
    })
  }

  async getData() {
    const data = await readFile(this.datafile, 'UTF-8');
    return JSON.parse(data).apps;
  }
}
module.exports = AppsServices;