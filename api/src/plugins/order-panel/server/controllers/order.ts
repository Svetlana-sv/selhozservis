import { Strapi } from '@strapi/strapi';
import {string} from "prop-types";

export default ({ strapi }: { strapi: Strapi }) => ({
  async find(ctx) {
    const orders = await strapi.query('api::order.order').find();
    console.log(1);
    return orders.map((order) => ({
      id: order.id,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      status: order.status,
      total: order.total,
      payment: order.payment,
      delivery: order.delivery,
    }));
  },
});
