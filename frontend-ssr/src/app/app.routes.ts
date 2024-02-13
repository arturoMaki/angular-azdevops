import { Routes } from '@angular/router';
import { DataPageService } from './services/data-page/data-page.service';

const initializeDynamicRoutes = async (): Promise<Routes> => {
  const result = DataPageService.getDataPages();

  return result
    .then(({ data }) => {
      if (data?.data?.attributes?.data_pages) {
        const pages = data.data.attributes.data_pages.data;
        const tree = DataPageService.buildTree(pages);
        return tree;
      }
      return [] as Routes;
    })
    .catch((err) => {
      console.log(err);
      return [] as Routes;
    });
};

export const routes = initializeDynamicRoutes();
