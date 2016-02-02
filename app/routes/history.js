import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //return this.store.findAll('transaction');
    return Ember.$.getJSON('http://localhost:3000/api/transactions');
  }
});
