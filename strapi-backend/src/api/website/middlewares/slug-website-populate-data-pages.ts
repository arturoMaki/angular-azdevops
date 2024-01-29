export default (config, { strapi }) => {
  return async (ctx, next) => {
    const { id } = ctx.params;

    const selectedPage = await strapi.query("api::website.website").findOne({
      where: {
        Name: {
          $eq: id.replace("-", " "),
        },
      },
    });

    if (selectedPage) {
      ctx.params.id = selectedPage.id;
    }

    ctx.query.populate = {
      data_pages: {
        populate: {
          "*": "*",
          parent: {
            "*": "*",
          },
        },
      },
    };

    await next();
  };
};
