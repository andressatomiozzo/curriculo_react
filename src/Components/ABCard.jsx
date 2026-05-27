import styles from "./ABCard.module.css";

const ABCard = ({title, course, institution, year}) => {
  return (
    <li className={styles.wrapper}>
      <div>
        <span className={styles.title}>{title}</span>
        <h3 className={styles.course}>{course}</h3>
      </div>
      <div className={styles.graduation}>
        <span className={styles.institution}>{institution}</span>
        <span className={styles.year}>{year}</span>
      </div>
    </li>
  );
};

export default ABCard;
