import Ember from 'ember';

export default Ember.Component.extend({
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

  // TODO: Get app ID from openexchange or look into paypal's conversion methods

    // 'USD': '$', // US Dollar
    // 'EUR': '€', // Euro
    // 'CRC': '₡', // Costa Rican Colón
    // 'GBP': '£', // British Pound Sterling
    // 'ILS': '₪', // Israeli New Sheqel
    // 'INR': '₹', // Indian Rupee
    // 'JPY': '¥', // Japanese Yen
    // 'KRW': '₩', // South Korean Won
    // 'NGN': '₦', // Nigerian Naira
    // 'PHP': '₱', // Philippine Peso
    // 'PLN': 'zł', // Polish Zloty
    // 'PYG': '₲', // Paraguayan Guarani
    // 'THB': '฿', // Thai Baht
    // 'UAH': '₴', // Ukrainian Hryvnia
    // 'VND': '₫', // Vietnamese Dong

  currencies: [
    {
      label: 'USD',
      rate: 1,
      symbol: '$'
    },
    {
      label: 'GBP',
      rate: 0.65,
      symbol: '£'
    },
    {
      label: 'EUR',
      rate: 0.75,
      symbol: '€'
    },
    {
      label: 'JPY',
      rate: 120.98,
      symbol: '¥'
    }
  ],
  paymentObj: {
    date: '',
    payee: '',
    amount: 0,
    currency: 'USD',
    message: '',
    reason: ''
  }
});
