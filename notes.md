## Notes

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

### Generate typings for project schema

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
