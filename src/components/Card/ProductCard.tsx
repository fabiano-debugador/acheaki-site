import Image from 'next/image';
import styled from 'styled-components';
import { IProductData } from '../../model/product';

const CardStyle = styled.div`
  width: 280px;
  height: 350px;
  background: red;

  @media (min-width: 768px) {
    background: pink;
  }

  @media (min-width: 1024px) {
    background: blue;
  }
`;

const CardImage = styled.div`
  position: relative;
  height: 260px;
  width: 100%;
  background: yellow;
`;

const Card: React.FC<IProductData> = ({product}) => {
  console.log(product);
  return (
    <CardStyle>
      <CardImage>
        <Image src="/r1.jpg" alt="blah" layout='fill' />
      </CardImage>
    </CardStyle>
  )
}

export default Card;