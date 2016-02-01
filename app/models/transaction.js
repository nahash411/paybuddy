import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  payee: DS.attr(),
  amount: DS.attr(),
  currency: DS.attr(),
  message: DS.attr(),
  reason: DS.attr()
});
