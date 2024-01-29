/**
 * website router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::website.website", {
  config: {
    findOne: {
      middlewares: ["api::website.slug-website-populate-data-pages"],
    },
  },
});
