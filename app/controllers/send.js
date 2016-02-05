import Ember from 'ember';

export default Ember.Controller.extend({

  payee: '',
  amount: '',
  message: '',
  isLoading: false,

  actions: {
    clearForm() {
      this.set('payee', '');
      this.set('amount', '');
      this.set('message', '');
    },
    sendData(){
      var self = this;
      if(!self.get('isLoading')){
        self.set('isLoading', true);
      }
      Ember.run.later(function(){
        self.set('isLoading', false);
        self.transitionTo('success');
      }, 1000);
    },
    formatAmount() {
      var amt = this.get('amount');
      var regex = new RegExp(/^[1-9]/);
      if (regex.test(amt)) {
        this.set('amount', (Number(amt).toLocaleString('en-US', {style: 'currency', currency: this.get('selectedCurrency')})));
      }
    },
    changeSelectedCurrency(value, component) {
      this.set('selectedCurrency', value)
      this.set('selectedCurrencySymbol', this.currencies[value]);
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
