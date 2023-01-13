import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 50px;
  background: blue;
  position: sticky;
  top: 0;
  z-index: 1;
`
const TopMenu = () => {
  return (
    <Container>
      <Link href="/">Ache aki</Link>
    </Container>
  )
}

export default TopMenu;