export interface IPostData {
  postData: IPost[];
}

export interface IPost2 {
  post: IPost;
}

export interface IPost {
  id:             number;
  idProduct?:     number;
  idPromotion?:   number;
  idService?:     number;
  idArticle?:     number;
  idImage?:       number;
  idVideo?:       number;
  idLogin:        number;
  idPerfil:       number;
  post?:          string;  
  video?:         string;
  article?:       string;
  articleSlug?:   string;
  image?:         string;
  price?:         string;
  promotion?:     string;
  description?:   string;
  date:           string;
  catProd?:       string;
  catProdSlug?:   string; 
  product?:       string;
  productSlug?:   string;
  service?:       string;
  serviceSlug?:   string;
  page:           string;
  type:           string;
  likes:          number;
}