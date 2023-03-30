import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const MenuContainer = styled.div`
  positon:relative;
  width: 100%
  height: 10px;
  background-color: silver;
  padding: 0 20px;
`;

const Options = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    max-width: 1180px;
    margin: 70px auto;
  }

  @media (min-width: 1024px) {
    margin-top: 100px;
  }
`;

const Option = styled.div``;

const Menu: React.FC = () => {
  const router = useRouter();
  const profilePage = router.query.profile;

  return (
    <MenuContainer>
      <Options>
        <Option>
          <Link href={`/${profilePage}`}>Perfil</Link>
        </Option>
        <Option>
          <Link href={`/${profilePage}/post`}>Postagens</Link>
        </Option>
        <Option>
          <Link href={`/${profilePage}/video`}>Videos</Link>
        </Option>
        <Option>
          <Link href={`/${profilePage}/imagem`}>Imagens</Link>
        </Option>
        <Option>
          <Link href={`/${profilePage}/produtos`}>Produtos</Link>
        </Option>
        <Option>
          <Link href={`/${profilePage}/promocao`}>Promoção</Link>
        </Option>
        <Option>
          <Link href={`/${profilePage}/contato`}>Contato</Link>
        </Option>
      </Options>
    </MenuContainer>
  );
};

export default Menu;
