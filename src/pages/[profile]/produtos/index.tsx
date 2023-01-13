import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import CategoryCard from '../../../components/Card/CategoryCard';
import Header from '../../../components/utils/profile/header/Header';
import Menu from '../../../components/utils/profile/menu/Menu';
import { IProductCategory } from '../../../model/categoryProduct';
import { IContextProfile } from '../../../model/profile';
import { categoriesProduct } from '../../../mock/categoryProduct';
import { profile } from '../../../mock/profile';
import { CardContainer, Container } from '../../../styles/Global';
import TopMenu from '../../../components/Template/TopMenu';

interface ISlugProps extends ParsedUrlQuery {
  slug: string;
}

const Profile: React.FC<IContextProfile> = ({ profile, categories }) => {
  const route = useRouter();
  return (
    <>
      <TopMenu />
      <Header profile={profile}/>
      <Menu />
      <Container>
        <CardContainer>
          {categories && categories.map((category: IProductCategory) => {
            return (
              <>
                <Link href={`/${route.query.profile}/produtos/${category.catSlug}`}>
                  <a>
                    <CategoryCard category={category} key={category.id} />
                  </a>
                </Link>
              </>
            )
          })}
        </CardContainer>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const ss = params as ISlugProps;
  console.log(ss);
  const userProfile = profile;
  const rr = categoriesProduct.map((v) => {
    return v;
  });

  return {
    props: {
      categories: rr,
      profile: userProfile
    },
  };
};

export default Profile;
