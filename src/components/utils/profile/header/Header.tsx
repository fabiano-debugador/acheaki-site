import styled from 'styled-components';
import { IContextProfile } from '../../../../model/profile';

const Container = styled.div`
  background-image: url('/capasrad.jpg');
  background-repeat: no-repeat;
  background-color: #cccccc;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 140px;

  @media (min-width: 768px) {
    height: 250px;
  }

  @media (min-width: 1024px) {
    height: 351px;
  }
`;

const Description = styled.p`
  color: #fff;
  background-color: #000;
  position: absolute;
  bottom: 10px;
  right: 50px;
`;

const Photo = styled.div`
  position: absolute;
  top: 115px;
  left: 20px;
  background-image: url('/unhaperfil.jpg');
  background-repeat: no-repeat;
  background-color: #cccccc;
  background-size: contain;

  width: 50px;
  height: 50px;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;

    top: 200px;
  }

  @media (min-width: 1024px) {
    width: 150px;
    height: 150px;

    top: 275px;
    left: 50px;
  }
`;

const Header: React.FC<IContextProfile> = ({ profile }) => {
  return (
    <Container>
      <div>
        <Description>{profile.name}</Description>
        <Photo />
      </div>
    </Container>
  );
};

export default Header;
