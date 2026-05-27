import styles from "./Introduction.module.css";
import MyPhoto from "../assets/foto.jpg";
import ImgTecnologies from "../Components/ImgTecnologies";
import html from "../assets/svg/html.svg?react";
import css from "../assets/svg/css.svg?react";
import js from "../assets/svg/js.svg?react";
import react from "../assets/svg/react.svg?react";
import git from "../assets/svg/git.svg?react";
import github from "../assets/svg/github.svg?react";

const Introduction = () => {
  return (
    <section className={styles.wrapper}>
      <div>
        <img src={MyPhoto} alt="Andressa" className={styles.myPhoto} />
      </div>

      <div className={`${styles.card} ${styles.helloCard}`}>
        <div className={styles.hand}>👋</div>
        <p>
          Olá, eu sou <strong>ANDRESSA</strong>
        </p>
      </div>
      <div className={`${styles.card} ${styles.webCard}`}>
        Desenvolvo projetos para <strong>WEB</strong>
      </div>

      <ImgTecnologies src={html} alt="html" className={styles.html} />
      <ImgTecnologies src={css} alt="css" className={styles.css} />
      <ImgTecnologies src={js} alt="javascript" className={styles.js} />
      <ImgTecnologies src={react} alt="react" className={styles.react} />
      <ImgTecnologies src={git} alt="git" className={styles.git} />
      <ImgTecnologies src={github} alt="github" className={styles.github} />
    </section>
  );
};

export default Introduction;
