export default (config, { strapi }) => {
  return async (ctx, next) => {
    const { id } = ctx.params;

    const selectedPage = await strapi
      .query("api::ui-navigation.ui-navigation")
      .findOne({
        where: {
          Name: {
            $eq: id,
          },
        },
      });

    if (selectedPage) {
      ctx.params.id = selectedPage.id;
    }

    ctx.query.populate = {
      navigation_links: {
        populate: {
          "*": "*",
          main: {
            "*": "*",
            populate: {
              "*": "*",
              Icon: { "*": "*" },
              data_page: {
                "*": "*",
              },
            },
          },
          parent: {
            "*": "*",
            populate: {
              "*": "*",
              data_page: {
                "*": "*",
              },
            },
          },
        },
      },
    };

    await next();
  };
};
