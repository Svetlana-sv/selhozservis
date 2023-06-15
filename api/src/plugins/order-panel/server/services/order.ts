import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  find() {
    return strapi.query('api::order.order').find();
  },
});

