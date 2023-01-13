export interface IProductCategory {
  id: number,
  idLogin: number,
  category: string,
  catSlug: string,
  image: string,
}

export interface ICategory {
  category: IProductCategory;
}