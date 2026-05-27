import styles from "./Header.module.css"
import Marca from "../assets/svg/marca_2.svg?react"

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Marca} alt="Andressa" className={styles.logo}/>
      <ul className={styles.menu}>
        <li>
          <a href="#formacao">Formação</a>
        </li>
        <li>
          <a href="#experiencia">Experiência</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
