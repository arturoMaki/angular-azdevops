export default {
  routes: [
    {
      method: 'GET',
      path: '/slug-page/:id',
      handler: 'page.slugPageAction',
      config: {
        auth: false,
      },
    },
  ],
};
