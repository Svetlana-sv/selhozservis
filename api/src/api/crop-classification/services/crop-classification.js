'use strict';

/**
 * crop-classification service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::crop-classification.crop-classification');
