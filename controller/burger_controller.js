var express = require('express');

var router = express.Router();

var burgers = require('../models/burger.js');

router.get('/', function (req, res) {
  burgers.selectAll(function (data) {
    var hbsObject = {
      burgrs: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', function (req, res) {
  burgers.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function (data) {
    res.redirect('/');
  });
});

router.put('/api/burgers:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burgers.updateOne({
    devoured: true
  }, condition, function (result) {
    res.redirect('/');
  });
});

module.exports = router;
