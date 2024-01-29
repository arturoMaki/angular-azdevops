## Notes

- Can be done:

  - Websites:
    Strapi is capable of serving as a backend for websites, providing APIs for content retrieval and management.

  - Pages:
    Content can be structured and organized into pages, which can then be delivered to the frontend through the provided APIs.

  - Components:
    Strapi allows you to create and manage components, providing a modular approach to building and organizing content.

  - Media Assets:
    You can handle and serve media assets (images, videos, etc.) through Strapi's media management capabilities.

  - Navigation:
    Strapi supports the creation and management of navigation elements for your website.

  - Roles, Permissions, and Workflows:
    Strapi offers robust user roles and permissions, enabling control over who can access and modify content. Workflow customization is possible.

  - Internationalization:
    Strapi supports internationalization, allowing you to manage content in multiple languages.

  - Content Versioning - Plugin:
    Content versioning can be implemented through plugins, providing the ability to track and manage changes to content over time.

- Can Be Done but Requires Customization:

  - Nest Content Items in Structured Tree in Content Manager:
    While not a default feature, customization can be applied to nest content items in a structured tree within the Content Manager.

  - Community and Enterprise Plugins:
    Strapi has a supportive community and offers both community and enterprise plugins, allowing for extensive customization and feature extension.

- Cannot Be Done:

  - Strapi is an Open-Source Headless CMS:
    Strapi is designed as a headless and decoupled CMS. While it's easily customizable, large-scale projects may require community and development efforts. It may not be recommended for very large projects.

  - Not an All-in-One Solution:
    Strapi focuses on content management and APIs. It does not provide a presentation layer or act as an all-in-one solution. It does not include a built-in page builder.

  - Decoupled Frontend Applications:
    Frontend applications are completely decoupled from Strapi. They cannot be hosted within Strapi; instead, Strapi provides content through APIs for consumption by separate frontend applications.

### Strapi Headless CMS systems have many uses, including:

- Building websites and applications with any JavaScript framework (Next.js, React, Vue, Angular)

- Providing content for static site generators (Gatsby, Jekyll, Hugo)

- Mobile applications (iOS, Android, React Native)

- Enriching product information on e-commerce sites

### Strapi offers the following advantages:

- Open source: Available in GitHub and supported by hundreds of contributors.
- Self-hosted: Gives you full control of your data and privacy.
- Customizable: Via admin panel or directly extending with plugins and customizations.
- Flexible: Consume it from any client, SPA, or mobile app, as well as via REST or GraphQL.

### SetUp a Strapi Project

#### Requirements

- [Check requirements.](https://docs.strapi.io/dev-docs/quick-start)

  - Node version 18 or 20
  - npm or yarm

#### SetUp local instance

- Run `npx create-strapi-app@latest my-project --quickstart --typescript`

- **Important**: It is possible to use **Strapi Starter CLI** to set a start frontent project in Next.js. [Check it](https://strapi.io/blog/introducing-the-new-strapi-starter-with-nextjs13-tailwind-and-typescript)

#### Dockerize the Strapi Project

The _@strapi-community/dockerize_ package is a CLI tool that can be used to generate a Dockerfile and docker-compose.yml file for a Strapi project. [Check it](https://docs.strapi.io/dev-docs/installation/docker)

- Switch DockerDesktop to Linux containers

- Open PowerShell 7 as an Admin

- Run `npx @strapi-community/dockerize@latest` within the existing Strapi project folder and follow the CLI prompts.

- Run `docker-compose up -d` to run containers.

### Media Assets in Strapi

[Managing Assets](https://docs.strapi.io/user-docs/media-library/managing-assets)

Field selection does not work on relational, media, component, or dynamic zone fields. To populate these fields, use the [populate parameter](https://docs.strapi.io/dev-docs/api/rest/populate-select#population).

### Component Type in Strapi

A component typically refers to a reusable and configurable content structure that can be used across different content types. Components in Strapi allow you to create modular and shareable content structures that can be easily integrated into different content types.

[Check the docu](https://docs.strapi.io/dev-docs/api/entity-service/components-dynamic-zones)

### Content Type Builder

From the Content-type Builder, administrators can create and manage content-types: collection types and single types but also components.

- Collection types are content-types that can manage several entries.
- Single types are content-types that can only manage one entry.
- Components are a data structure that can be used in multiple collection types and single types.

### Generate types for project schema

- Run the script in the powershell to generate them: `npm run strapi ts:generate-types --debug #optional flag to display additional logging`

- [Autogenerate](https://docs.strapi.io/dev-docs/configurations/typescript#strapi-specific-configuration-for-typescript)

### Copy Strapi Types in Frontend

- Install @strapi/types in frontend `npm install --save-dev @strapi/types`

- Run `.\copy-strapi-types-to-frontend.ps1`

[Docu](https://www.youtube.com/watch?v=Gv3dAG8ktsI)

### SDK - Typescript

- [strapi-sdk-js](https://strapi-sdk-js.netlify.app/api/types)

### Sulg

- [Create a Slug Plugin](https://strapi.io/blog/how-to-build-a-plugin-with-typescript)

### Create and Overwriting Controllers

- [Tutorial](https://www.youtube.com/watch?v=gI1oCYibrAg)

### Create Custom Services

- [Tutorial](https://www.youtube.com/watch?v=ACRpJQQHRf4)

### Populate Query Engine API

- [Populatig Query Engine](https://docs.strapi.io/dev-docs/api/query-engine/populating)

- [Populating and filtering](https://strapi.io/blog/demystifying-strapi-s-populate-and-filtering)

### GraphQL Pluging

- [Add GrapghQL plugin](https://strapi.io/blog/building-custom-resolvers-with-strapi)

### Content-Versioning Plugin

- [Docs](https://github.com/notum-cz/strapi-plugin-content-versioning)

- http://localhost:1337/api/news/1?populate[versions][populate]=\*

### Add plugin or dependencies to Strapi

Each time you install some Plugin or make some changes in your node_modules, it is needed to rebuild the container where those changes were done

```sh
# Check docker-compose.yml for the correct name of the containers
# remove the image
docker rmi strapi-backend
docker rmi strapi-backendAdminer
# Those are examples
docker-compose up strapi-backend
docker-compose up strapi-backendAdminer
# the container should start automatically. If not, start the container if it down
docker start <container-id>
```

If you want to check if those changes were applied to the container, once it is running: ex: package.json

```sh
docker exec -it <container-id> /bin/bash
```

### Add plugin or dependencies to Strapi

Each time you make custom changes in your strapi instance (controlles, service, middelwares, ...), it is needed to restart the strapi-backend container

```sh
# Check Ids of contaners CONTAINER ID column
docker ps
# Copy the id: ex 041d0c86c241
docker restart 041d0c86c241
```

### Explore contaniner MySQL_DB

```sh
docker exec -it <db-container-id> /bin/bash
mysql --host=<ENV.DATABASE_HOST> --user=<ENV.DATABASE_USERNAME> --password=<ENV.DATABASE_PASSWORD> <ENV.DATABASE_NAME>
SHOW DATABASES;
USE <DATABASE_NAME>
SHOW TABLES;
DESCRIBE <TABLE_NAME>;
SELECT * FROM <TABLE_NAME>;
SELECT <COLUMN_NAME> FROM <TABLE_NAME>;
```

### Add API Documentation

- [Check the Documentation Plugin](https://market.strapi.io/plugins/@strapi-plugin-documentation)

### Add Cors

[Docu](https://www.restack.io/docs/strapi-knowledge-strapi-cors-configuration)

```js
// ./config/middleware.ts
export default ({ env }) => [
  ...{
    name: "strapi::cors",
    config: {
      origin: env("CORS_ORIGIN"),
    },
  },
];
```

```
CORS_ORIGIN=http://your-domain,http://another-domain,
```

### Add SEO Plugin

[Docu](https://market.strapi.io/plugins/@strapi-plugin-seo)
