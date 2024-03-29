import { RichText } from 'src/common/strapi.interface';
import { StrapiResponse } from 'strapi-sdk-js';

export interface New {
  Title: string;
  Subtitle: string;
  Content: RichText[];
  Image: { data: { attributes: { formats: { large: { url: string } } } } };
  news_categories: StrapiResponse<NewsCategory[]>;
}

export interface NewsCategory {
  Name: string;
}
