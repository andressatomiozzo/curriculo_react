import styles from "./ExperienciaCard.module.css";

const ExperienciaCard = ({ year, company, position, responsibilities, skills }) => {
  return (
    <div className={styles.empresa}>
      <span className={styles.ano}>{year}</span>
      <h3 className={styles.titulo}>{company}</h3>
      <span className={styles.titulo}>{position}</span>
      <p className={styles.texto}>{responsibilities}</p>
      <ul className={styles.habilidades}>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienciaCard;
