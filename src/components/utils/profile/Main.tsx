// import Header from './header/Header';
// import Menu from './menu/Menu';
// import Map from './map/Map';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
const Main: React.FC = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import('./map/Map'), {
        loading: () => <p>Loading map...</p>,
        ssr: false,
      }),
    []
  );
  return (
    <>
      <section>{/* <Header /> */}</section>
      <section>{/* <Menu /> */}</section>
      {/* <section>Description</section> */}
      <section>
        <Map />
      </section>
      {/* <section>Horario</section>
      <section>Contato</section> */}
    </>
  );
};

export default Main;
