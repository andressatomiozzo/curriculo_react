import styles from "./Projects.module.css";
import Carrossel from "../Components/Carrossel";

const Projects = () => {
  return (
    <section className={`secao ${styles.projetos}`} id="projetos" aria-label="Projetos">
      <h3 className="littleTitle">Projetos</h3>
      <Carrossel />
    </section>
  );
};

export default Projects;
