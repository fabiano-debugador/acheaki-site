import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
// import { ParsedUrlQuery } from 'querystring';
import Main from '../../../components/utils/profile/Main';
import profile from '../../../services/profile';

interface IData {
  profile: IProfile;
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

interface ISlugProps extends ParsedUrlQuery {
  slug: string;
}

const Profile: React.FC<IData> = ({ profile }) => {
  console.log(profile);
  return <Main />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const url = ['motos'];
  return {
    paths: url.map((v) => ({
      params: {
        profile: v,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ss = params as ISlugProps;
  console.log(ss);
  const rr = profile.map((v) => {
    return v;
  });
  // console.log(ss, rr);
  // console.log(rr);
  return {
    props: {
      profile: rr,
    },
  };
};

export default Profile;
