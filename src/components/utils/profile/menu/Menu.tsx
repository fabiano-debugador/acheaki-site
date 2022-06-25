import classes from './Menu.module.sass';
const Menu: React.FC = () => {
  return (
    <div className={classes.menu}>
      <div className={classes.menu__link}>Perfil</div>
      <div className={classes.menu__link}>Postagens</div>
      <div className={classes.menu__link}>Videos</div>
      <div className={classes.menu__link}>Imagens</div>
      <div className={classes.menu__link}>Produtos</div>
      <div className={classes.menu__link}>Promoção</div>
      <div className={classes.menu__link}>Contato</div>
    </div>
  );
};

export default Menu;
