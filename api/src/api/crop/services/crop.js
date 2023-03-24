'use strict';

/**
 * crop service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::crop.crop');
