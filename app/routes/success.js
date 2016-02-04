import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var pmt = this.controllerFor('send');
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.run.later(function() {
        resolve({
          payee: pmt.get('payee'),
          amount: pmt.get('amount')
        });
      }, 3000);
    });
  }
});
