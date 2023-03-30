import Header from './header/Header';
import Menu from './menu/Menu';
import About from './about/About';
import Operation from './operation/Operation';
import Contact from './contact/Contact';
import Map from './map/Map';
// import { UseProfileContext } from '../../../hooks/ProfileContext';
import { WidthMediaQuery } from '../../../styles/Global';
import { IContextProfile } from '../../../model/profile';

const Main: React.FC<IContextProfile> = ({ profile }) => {
  console.log(profile);
  return (
    <main>
      <section>
        <Header profile={profile} />
      </section>
      <section>
        <Menu />
      </section>
      <WidthMediaQuery>
        <section>
          <About profile={profile} />
        </section>
        <section>
          <Map />
        </section>
        <section>
          <Operation />
        </section>
        <section>
          <Contact />
        </section>
      </WidthMediaQuery>
    </main>
  );
};

export default Main;
