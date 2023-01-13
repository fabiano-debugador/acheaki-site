import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import TopMenu from '../../components/Template/TopMenu';
import Main from '../../components/utils/profile/Main';
import { IContextProfile } from '../../model/profile';
import {profile, profiles} from '../../mock/profile';
interface ISlugProps extends ParsedUrlQuery {
  slug: string;
}

const Profile: React.FC<IContextProfile> = ({ profile }) => {
  return (
    <>
      <TopMenu />
      <Main profile={profile}/>
    </>
  )
};

export const getStaticPaths: GetStaticPaths = async () => {
  const profilesPages = profiles;
  return {
    paths: profilesPages.map((v) => ({
      params: {
        profile: v.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const profileSlug = params as ISlugProps;
  console.log(profileSlug);
  const profiles = profile;

  return {
    props: {
      profile: profiles
    },
  };
};

export default Profile;
