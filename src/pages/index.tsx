import { GetStaticProps } from "next";
import PostPage from "../components/PostPage/PostPage";
import { post } from "../mock/post";
import { getUsers } from "../mock/users";
import { IPostData } from "../model/post";

const Post: React.FC<IPostData> = ({postData}) => {
  return (
    <>
      <PostPage postData={postData} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = post; // Here the services will be called
  const users = await getUsers();
  console.log(users)
  return {
    props: {
      postData: posts
    }
  }
}

export default Post;
