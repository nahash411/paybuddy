export default function() {
  this.get('/transactions', function() {
    return {
      data: [
        {
          type: 'transaction',
          id: 1,
          attributes: {
            date: '2/1/2016',
            payee: 'ceverett@gmail.com',
            amount: 30,
            currency: 'USD',
            message: '',
            reason: 'FF'
          }
        },
        {
          type: 'transaction',
          id: 2,
          attributes: {
            date: '1/15/2016',
            payee: 'alexia.everett@me.com',
            amount: 20,
            currency: 'USD',
            message: '',
            reason: 'GS'
          }
        }
      ]
    };
  });
}
