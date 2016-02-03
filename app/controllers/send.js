import Ember from 'ember';

export default Ember.Controller.extend({

  payee: '',
  amount: '',

  actions: {
    changeSelectedCurrency: function (value, component) {
      this.set('selectedCurrency.label', value)
      console.log(this.get('selectedCurrency.label'));
    }
  },

  paymentReasons: [
    {
      code: 'FF',
      text: "I'm sending money to friends and/or family"
    },
    {
      code: 'GS',
      text: "I'm paying for goods or services"
    }
  ],

  selectedCurrency: {
    label: 'GBP'
  },

  currencies: {
    'USD': '$',
    'GBP': '£',
    'EUR': '€',
    'JPY': '¥'
  }
});
