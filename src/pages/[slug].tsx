import { GetStaticPaths, GetStaticProps } from 'next';
// import { ParsedUrlQuery } from 'querystring';
import Main from '../components/utils/profile/Main';
import profile from '../services/profile';

interface tt {
  slug: IProfile;
}

interface IProfile {
  _id?: number;
  idLogin?: number;
  idCategory?: number;
  idCategories?: number;
  name?: string;
  slogan?: string;
  description?: string;
  slug: string;
}

// interface ISlugProps extends ParsedUrlQuery {
//   slug: string;
// }

const Profile: React.FC<tt> = ({ slug }) => {
  console.log(slug);
  // const ola = slug;
  return <Main />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const url = ['audi'];
  return {
    paths: url.map((v) => ({
      params: {
        slug: v,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  // const ss = params as ISlugProps;
  const rr = profile.map((v) => {
    return v;
  });
  // console.log(ss, rr);
  // console.log(rr);
  return {
    props: {
      slug: rr,
    },
  };
};

export default Profile;
