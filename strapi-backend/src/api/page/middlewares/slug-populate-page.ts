export default (config, { strapi }) => {
  return async (ctx, next) => {
    const { id } = ctx.params;

    const selectedPage = await strapi.query("api::page.page").findOne({
      where: {
        Slug: {
          $eq: `/${id}`,
        },
      },
    });

    if (selectedPage) {
      ctx.params.id = selectedPage.id;
    }

    ctx.query.populate = {
      components: {
        populate: "*",
      },
    };

    await next();
  };
};
