export default [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/api/orders',
    handler: 'order.find',
    config: {
      policies: [],
    },
  },

];



