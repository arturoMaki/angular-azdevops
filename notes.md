## Notes

### SetUp a Strapi Project

- [Check requirements.](https://docs.strapi.io/dev-docs/quick-start)

  - Node version 18 or 20
  - npm or yarm

- Run `npx create-strapi-app@latest my-project --quickstart --typescript`

- **Important**: It is possible to use **Strapi Starter CLI** to set a start frontent project in Next.js. [Check it](https://strapi.io/blog/introducing-the-new-strapi-starter-with-nextjs13-tailwind-and-typescript)

### Dockerize the Strapi Project

The _@strapi-community/dockerize_ package is a CLI tool that can be used to generate a Dockerfile and docker-compose.yml file for a Strapi project. [Check it](https://docs.strapi.io/dev-docs/installation/docker)

- Switch DockerDesktop to Linux containers

- Open PowerShell 7 as an Admin

- Run `npx @strapi-community/dockerize@latest` within the existing Strapi project folder and follow the CLI prompts.

- Run `docker-compose up -d` to run containers.
