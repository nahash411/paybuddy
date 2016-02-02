var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var transactions = [];

for (var i = 1; i <= 300; i++) {
  var transaction = {
    type: 'transaction',
    id: i,
    attributes: {
      date: new Date('2/1/2016') - (i * 86400000),
      payee: 'ceverett@gmail.com',
      amount: 30,
      currency: 'USD',
      message: '',
      reason: 'FF'
    }
  };
  transactions.push(transaction);
}

app.get('/api/transactions', function (req, res) {
  console.log('Successful GET');
  res.json(transactions);
});

app.listen(3000);
