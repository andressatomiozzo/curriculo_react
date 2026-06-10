import styles from "./Projects.module.css";
import Carrossel from "../Components/Carrossel";
import ScrollReveal from "../Context/ScrollReveal";

const Projects = () => {
  return (
    <ScrollReveal>
      <section className={`secao ${styles.projetos}`} id="projetos" aria-label="Projetos">
        <h3 className="littleTitle">Projetos</h3>
        <Carrossel />
      </section>
    </ScrollReveal>
  );
};

export default Projects;
