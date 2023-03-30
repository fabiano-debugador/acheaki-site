import { IAddress } from './address';
import { IProductCategory } from './categoryProduct';

export interface IData {
  profile: IProfile;
}

export interface IProfile {
  _id: number;
  idLogin: number;
  idCategory: number;
  idCategories: number;
  name: string;
  slogan: string;
  description: string;
  slug: string;
  address?: IAddress;
}

export interface IContextProfile {
  profile: IProfile;
  categories?: IProductCategory[];
}
