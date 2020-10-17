export interface IBook {
  id?: string;
  categoryid?: string;
  title?: string;
  author?: string;
  price?: number;
  _created?: number;
  categoryname?: string;
}

export interface ICategories {
  id?: string;
  name?: string;
}

