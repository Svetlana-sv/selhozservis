const pluginPermissions = {
  // user: [
  //   { action: 'plugins::order-panel.up_users.create', subject: null },
  //   { action: 'plugins::order-panel.up_users.read', subject: null },
  //   { action: 'plugins::order-panel.up_users.update', subject: null },
  //   { action: 'plugins::order-panel.user.delete', subject: null },
  // ],
  // // Разрешение на создание заказа
  // createOrder: [{ action: 'plugins::order-panel.order.create', subject: null }],
  // // Разрешение на чтение заказа
  // readOrder: [{ action: 'plugins::order-panel.order.read', subject: null }],
  // // Разрешение на обновление заказа
  // updateOrder: [{ action: 'plugins::order-panel.order.update', subject: null }],
  // // Разрешение на удаление заказа
  // deleteOrder: [{ action: 'plugins::order-panel.order.delete', subject: null }],
  // // Разрешение на поиск заказа
  // findOrder: [{ action: 'plugins::order-panel.order.find', subject: null }],
  // readUser: [{ action: 'plugins::order-panel.up_users.read', subject: null }],
  //
  // // Добавляем разрешение для запроса с параметром "populate"
  // customPopulate: [
  //   {
  //     action: 'plugins::users-permissions.user.find',
  //     subject: 'user',
  //     fields: ['*'],
  //     // conditions: {
  //     //   // Добавляем условие для запроса с параметром "populate"
  //     //   'query.populate': ['deep', '2'],
  //     // },
  //   },
  // ],
};

export default pluginPermissions;
