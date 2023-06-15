'use strict';

/**
 * processing-method service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::processing-method.processing-method');
