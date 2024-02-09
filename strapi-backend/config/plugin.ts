export default ({ env }) => ({
  "content-versioning": {
    enabled: false,
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
  seo: {
    enabled: true,
  },
  "multi-tenant": {
    enabled: false,
  },
});
