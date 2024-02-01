### Multi-tenant in Strapi

Can I have multiple websites in a Strapi Instance?

Strapi does not include a built-in multi-tenancy plugin.

[Official Documentation-Item6-](https://strapi.io/blog/strapi-support-most-frequently-asked-questions-on-the-website)

However there is a buch of unofficial options to approach multi-tenancy:

- Have multiple SaaS customers use the same Strapi instance. [strapi-plugin-multi-tenant](https://github.com/anetaj/strapi-plugin-multi-tenant)

- Create multiple strapi instances sharing CodeBase. [Documentation](https://strapi.io/blog/how-to-build-a-pseudo-multi-tenant-application-in-strapi)[Medium-Docu](https://medium.com/@bikramkawan/how-to-run-strapi-as-multitenancy-multi-tenant-app-to-host-multiple-website-with-single-codebase-4dde5f9de6d)
