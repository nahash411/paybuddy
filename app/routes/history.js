import Ember from 'ember';

var transactions = [
  {
    id: 1,
    date: '2/1/2016',
    payee: 'ceverett@gmail.com',
    amount: 30.00,
    currency: 'USD',
    message: '',
    reason: 'GS'
  }
];

export default Ember.Route.extend({
  model() {
    return transactions;
  }
});
