import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Main from '../../../components/utils/profile/Main';
// import profile from '../../../services/profile';

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
  profile: string;
}

const Profile: React.FC<IData> = ({ profile }) => {
  console.log(profile);
  return <Main />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const { profile, slug } = params as ISlugProps;

  console.log(profile, slug);

  const rr = [
    {
      _id: 1,
      idLogin: 1,
      idCategory: 1,
      idCategories: 1,
      name: 'ache aki',
      slogan: 'kkk',
      description: 'kkkk',
      slug: 'ache-aki',
    },
    {
      _id: 2,
      idLogin: 2,
      idCategory: 2,
      idCategories: 2,
      name: 'lebron',
      slogan: 'lebron',
      description: 'lebron',
      slug: 'lebron',
    },
  ];
  return {
    props: {
      profile: rr,
    }, // will be passed to the page component as props
  };
};

export default Profile;
