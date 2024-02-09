/**
 * ui-navigation router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::ui-navigation.ui-navigation", {
  config: {
    findOne: {
      middlewares: ["api::ui-navigation.slug-navigation-populate-links"],
    },
  },
});
