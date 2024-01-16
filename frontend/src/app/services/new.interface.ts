import { RichText } from 'src/common/strapi.interface';

export interface New {
  Title: string;
  Subtitle: string;
  Content: RichText;
}
