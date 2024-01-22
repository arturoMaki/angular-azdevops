/**
 * page controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::page.page',
  ({ strapi }) => ({
    async slugPageAction(ctx) {
      try {
        const { id } = ctx.params;

        const populatedPages = await strapi.db
          .query('api::page.page')
          .findMany({
            populate: ['data_page', 'components'],
          });

        const selectedPage = populatedPages.find(
          (page) => page.data_page.Slug === `/${id}`
        );

        const sanitizedEntity = await this.sanitizeOutput(selectedPage, ctx);

        return this.transformResponse(sanitizedEntity);
      } catch (error) {
        ctx.body = error;
      }
    },
  })
);
