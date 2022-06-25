import classes from './Header.module.sass';
const Header: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.perfil}>
        <p className={classes.perfil__description}>Descrição do perfil</p>
        <div className={classes.perfil__photo}></div>
      </div>
    </div>
  );
};

export default Header;
