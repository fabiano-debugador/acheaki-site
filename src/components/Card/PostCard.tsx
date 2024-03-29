import { IPost2 } from "../../model/post";
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  max-width: 600px;
  height:500px;
  background: red;
  margin: 40px 10px;

  @media(min-width: 768px) {
    margin: 40px auto;
  }
  @media(min-width: 1024px) {

  }
`;

const Header = styled.div`
  height: 50px;
  background: pink;
`;

const Footer = styled.div`
  height:50px;
  background:blue;
`;
const PostCard: React.FC<IPost2> = ({post}) => {
  const posts = post;
  
  return (
    <Container>
      <Header />
      <h1>{posts.product}</h1>
      <Footer />
    </Container>
  )
}

export default PostCard;