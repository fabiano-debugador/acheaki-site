import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Options = styled.div`
  display: none;
  @media (min-width: 768px) {
    position: relative;
    margin-top: 70px;
    display: flex;
    justify-content: space-evenly;
    background-color: silver;
  }

  @media (min-width: 1024px) {
    margin-top: 100px;
  }
`;

const Menu: React.FC = () => {
  const router = useRouter();
  const profilePage = router.query.profile;

  return (
    <Options>
      <div>
        <Link href={`/${profilePage}`}>
          Perfil
        </Link>
      </div>
      <div>
        <Link href={`/${profilePage}/post`}>
          Postagens
        </Link>
      </div>
      <div>
        <Link href={`/${profilePage}/video`}>
          Videos
        </Link>
      </div>
      <div>
        <Link href={`/${profilePage}/imagem`}>
          Imagens
        </Link>
      </div>
      <div>
        <Link href={`/${profilePage}/produtos`}>
          Produtos
        </Link>
      </div>
      <div>
        <Link href={`/${profilePage}/promocao`}>
          Promoção
        </Link>
      </div>
      <div>
        <Link href={`/${profilePage}/contato`}>
          Contato
        </Link>
      </div>
    </Options>
  );
};

export default Menu;
