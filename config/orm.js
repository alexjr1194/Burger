var connection = require('./connections.js');

function printQuestionMarks (num) {
  console.log(num);
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push('?');
  }
  console.log('=======', arr, arr.toString());
  return arr.toString();
}

function objToSql (ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === 'string' && value.indexOf(' ' >= 0)) {
        value = "'" + value + "'";
      }
      arr.push(key + '=' + value);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = 'SELECT * FROM ' + tableInput + ';';
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    console.log(table, cols, vals[0].length + 'please work -------------------');
    console.log(printQuestionMarks(vals[0].length));
    var queryString = 'INSERT INTO ' + table;
    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function (table, objColVal, condition, cb) {
    console.log('======',objColVal)
    var queryString = 'UPDATE ' + table;
    queryString += 'SET ';
    queryString += objToSql(objColVal);
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) {
        console.log('err at ORM re-order' + err);
      }
      cb(result);
    });
  }
};

module.exports = orm;
