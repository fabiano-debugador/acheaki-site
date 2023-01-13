import { IProfile } from "./profile";

export interface IProductData {
  product: IProduct;
}

export interface IProduct {
  id:          number;
  idLogin:     number;
  idCategory:  number;
  name:        string;
  slug:        string;
  price:       number;
  description: string;
  image:       string;
  page:        string;
  tag:         string;
  vote:        number;
  like:        number;
  point:       number;
}

export interface IContextProduct extends IProductData{
  profile: IProfile;
}
