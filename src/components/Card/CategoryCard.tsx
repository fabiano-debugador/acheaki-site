import Image from 'next/image';
import styled from 'styled-components';
import { ICategory } from '../../model/categoryProduct';

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

const CategoryCard: React.FC<ICategory> = ({category}) => {
  return (
    <CardStyle>
      <CardImage>
        <Image src={category.image} alt="blah" layout='fill' />
      </CardImage>
    </CardStyle>
  )
}

export default CategoryCard;