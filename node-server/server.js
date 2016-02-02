var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var transactionJSON = {};

var transactionUnits = [];

for (var i = 1; i <= 300; i++) {
  var transaction = {
    id: i,
    date: new Date('2/1/2016') - (i * 86400000),
    payee: 'ceverett@gmail.com',
    amount: 30,
    currency: 'USD',
    message: '',
    reason: 'FF'
  };
  transactionUnits.push(transaction);
}

transactionJSON['transactions'] = transactionUnits;

app.get('/api/transactions', function (req, res) {
  console.log(req.query);
  res.json(transactionJSON);
});

app.listen(3000);
