var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

app.get('/api/transactions', function (req, res) {

  var page_start = 0;
  var page_length = +req.query.per_page;
  var page_end;
  var total_pages = transactionUnits.length / page_length;

  if (req.query.page !== '1') {
    page_start = (req.query.page * page_length) - 1;
  }

  page_end = page_start + page_length;

  if (transactionUnits.length % page_length !== 0) {
    total_pages++;
  }

  var transactionJSON = {
    transactions: transactionUnits.slice(page_start, page_end),
    meta: {
      total_pages: total_pages
    }
  };

  res.json(transactionJSON);
});

app.listen(3000, function () {
  console.log('Listening on port 3000...');
});
