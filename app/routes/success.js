import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var pmt = this.controllerFor('send');
    var payee = pmt.get('payee');
    var amount = pmt.get('amount');
    pmt.set('payee', '');
    pmt.set('amount', '');
    pmt.set('message', '');
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.run.later(function() {
        resolve({
          payee: payee,
          amount: amount
        });
      }, 3000);
    });
  }
});
