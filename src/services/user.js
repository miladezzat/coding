const { userModel } = require('../models');

class User {
  constructor() {
    this.model = userModel;
  }

  /**
   *
   * @param {*} args
   * @returns
   */
  getUsers() {
    return this.model.find();
  }
}

module.exports = new User();
