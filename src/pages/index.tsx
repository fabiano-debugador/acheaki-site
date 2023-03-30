import { GetStaticProps } from 'next';
import PostPage from '../components/PostPage/PostPage';
import { post } from '../mock/post';
// import { getUsers, getAllUserInfo } from '../mock/users';
import { IPostData } from '../model/post';

const Post: React.FC<IPostData> = ({ postData }) => {
  return (
    <>
      <PostPage postData={postData} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = post; // Here the services will be called
  // const rr = await getUsers();
  // const info = await getAllUserInfo('641f515253e4b3005818d54d');
  // console.log(info, rr);
  return {
    props: {
      postData: posts,
    },
  };
};

export default Post;
