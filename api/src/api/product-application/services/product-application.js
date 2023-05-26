'use strict';

/**
 * product-application service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-application.product-application');
