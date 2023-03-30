import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
// import { IProductCategory } from '../../../model/categoryProduct';
import { IProduct, IContextProduct } from '../../../model/product';
import { product, products } from '../../../mock/product';
import ProductPage from '../../../components/ProductPage/ProductPage';
import Header from '../../../components/utils/profile/header/Header';
import { profile } from '../../../mock/profile';
import Menu from '../../../components/utils/profile/menu/Menu';
import { Container } from '../../../styles/Global';
import TopMenu from '../../../components/Template/TopMenu';

interface ISlugProps extends ParsedUrlQuery {
  page: string;
}

const Category: React.FC<IContextProduct> = ({ product, profile }) => {
  return (
    <>
      <TopMenu />
      <Header profile={profile} />
      <Menu />
      <Container>
        <ProductPage product={product} />
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page } = context.params as ISlugProps;
  // fazer a consulta para pegar categoria ou produto
  const userProfile = profile;
  let productOBJ = {} as IProduct | IProduct[];

  if (page.length === 1) {
    productOBJ = products;
  } else if (page.length === 2) {
    productOBJ = product;
  }

  if (page.length > 2) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      product: productOBJ,
      profile: userProfile,
    }, // will be passed to the page component as props
  };
};

export default Category;
