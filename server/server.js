var express = require('express');
var app = express();

var transactions = [];

for (var i = 1; i <= 300; i++) {
  var transaction = {
    type: 'transaction',
    id: i,
    attributes: {
      date: '2/1/2016',
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
  res.json(transactions);
});

app.listen(3000);
