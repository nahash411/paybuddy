import Ember from 'ember';

export default Ember.Controller.extend({

  payee: '',
  amount: '',
  isLoading: false,

  actions: {
    sendData:function(){
      var self = this;
      if(!self.get('isLoading')){
        self.set('isLoading', true);
      }
      Ember.run.later(function(){
        self.set('isLoading', false);
        self.transitionTo('success');
      }, 1000);
    },
    formatAmount: function () {
      var amt = this.get('amount');
      var regex = new RegExp(/^[1-9]/);
      if (regex.test(amt)) {
        this.set('amount', (Number(amt).toLocaleString('en-US', {style: 'currency', currency: this.get('selectedCurrency')})));
      }
    },
    changeSelectedCurrency: function (value, component) {
      this.set('selectedCurrency', value)
      this.set('selectedCurrencySymbol', this.currencies[value]);
      console.log(this.get('selectedCurrencySymbol') + ' ' + this.get('amount'));
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

  selectedCurrency: 'USD',
  selectedCurrencySymbol: '$',

  currencies: {
    'USD': '$',
    'GBP': '£',
    'EUR': '€',
    'JPY': '¥'
  }
});
