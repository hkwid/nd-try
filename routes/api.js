var express = require('express');
var router = express.Router();

var kpis = require('../data/kpi.dummy');

/* GET users listing. */
router.get('/kpi', function(req, res, next) {
  var fromDate = 0;
  var toDate = Date.now();

  if(!req.query.fromDate) {
    res.send('error: set from date');
  } else {
    fromDate = req.query.fromDate;
  }
  if(!req.query.toDate) {
    // res.send('error: set to date');
  } else {
    toDate = req.query.toDate;
  }
  var out = []
  for (kpi of kpis) {
    if((kpi.modifiedDate > fromDate) &&
       (kpi.modifiedDate < toDate)){
      out.push(kpi);
    }
  }
  res.json(out);
});

module.exports = router;
