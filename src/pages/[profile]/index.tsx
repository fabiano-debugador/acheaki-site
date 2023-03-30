import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import TopMenu from '../../components/Template/TopMenu';
import Main from '../../components/utils/profile/Main';
import { IContextProfile } from '../../model/profile';
// import { profile, profiles } from '../../mock/profile';
import { getAllPageProfiles, getProfileBySlug } from '../../mock/users';
// import { getUsers, getAllUserInfo } from '../mock/users';
export interface ISlugProps extends ParsedUrlQuery {
  slug: string;
}

const Profile: React.FC<IContextProfile> = ({ profile }) => {
  return (
    <>
      <TopMenu />
      <Main profile={profile} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const profilesPages = await getAllPageProfiles();
  return {
    paths: profilesPages.map((page) => ({
      params: {
        profile: page.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const profileSlug = params as ISlugProps;
  const profilesData = await getProfileBySlug(profileSlug);

  return {
    props: {
      profile: profilesData,
    },
  };
};

export default Profile;
