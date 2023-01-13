import Link from "next/link";
import { IPostData, IPost } from "../../model/post";
import PostCard from "../Card/PostCard";
import TopMenu from "../Template/TopMenu";

const PostPage: React.FC<IPostData> = ({postData}) => {
  const posts = postData;

  return <>
    <TopMenu />
    <Link href={'/ache-aki'}>
      ache aki
    </Link>
    <h1>
      {posts.map((posts: IPost) => {
        return (
          <PostCard key={posts.id} post={posts} />
        )
      })}
    </h1>
  </>
}

export default PostPage;