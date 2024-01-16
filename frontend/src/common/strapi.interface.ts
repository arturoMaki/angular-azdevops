export interface BaseStrapi<T> {
  data: BaseStrapiData<T>[];
  meta: any;
}

export interface BaseStrapiData<T> {
  id: number;
  attributes: T;
}

export interface RichText {
  type: string;
  children: [
    {
      text: string;
      type: string;
    }
  ];
}
