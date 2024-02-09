export default (config, { strapi }) => {
  return async (ctx, next) => {
    const { id } = ctx.params;

    const selectedPage = await strapi.query("api::page.page").findOne({
      where: {
        data_page: {
          Slug: {
            $eq: `/${id}`,
          },
        },
      },
    });

    if (selectedPage) {
      ctx.params.id = selectedPage.id;
    }

    ctx.query.populate = {
      data_page: {
        populate: {
          "*": "*",
          parent: {
            "*": "*",
          },
        },
      },
      components: {
        populate: {
          "*": "*",
          relational_field: {
            populate: "*",
            Image: "*",
          },
          component: {
            populate: "*",
          },
        },
      },
    };

    await next();
  };
};
