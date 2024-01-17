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
