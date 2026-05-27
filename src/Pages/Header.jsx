import Marca from "../assets/svg/marca_2.svg"

const Header = () => {
  return (
    <header>
      <img id="logo" src={Marca} alt="Andressa" />
      <ul id="header_menu">
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
