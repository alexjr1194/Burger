var orm = require('../config/orm.js');

var burgers = {
  selectAll: function (cb) {
    orm.selectAll('burgers', function (res) {
      cb(res);
    });
  },
  insertOne: function (cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVal, condition, cb) {
    orm.updateOne('burger', objColVal, condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burgers;
