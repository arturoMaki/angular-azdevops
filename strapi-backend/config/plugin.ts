export default ({ env }) => ({
  "content-versioning": {
    enabled: true,
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        website: {
          field: "slug",
          references: "Name",
        },
      },
    },
  },
});
