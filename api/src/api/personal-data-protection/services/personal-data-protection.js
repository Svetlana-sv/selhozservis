'use strict';

/**
 * personal-data-protection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::personal-data-protection.personal-data-protection');
