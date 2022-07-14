import Header from './header/Header';
import Menu from './menu/Menu';
import About from './about/About';
import Operation from './operation/Operation';
import Contact from './contact/Contact';
import Map from './map/Map';

const Main: React.FC = () => {
  return (
    <main>
      <section>
        <Header />
      </section>
      <section>
        <Menu />
      </section>
      <section>
        <About />
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
    </main>
  );
};

export default Main;
