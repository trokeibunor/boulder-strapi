'use strict';

/**
 * blogger service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blogger.blogger');
