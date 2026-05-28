import ABCard from "../Components/ABCard";
import styles from "./AcademicBackground.module.css";

const AcademicBackground = () => {
  return (
    <section className={styles.formacao} id="formacao" aria-label="Formação">
      <div className={`secao ${styles.wrapper}`}>
        <h2 className="subtitulo" style={{ color: "#292929" }}>
          Formação
        </h2>
        <div>
          <p className={styles.formacaoTexto}>
            Passei anos decifrando <span className={styles.bold}>códigos genéticos</span> agora, minha missão é decifrar códigos de interface e
            entregar <span className={styles.bold}>tecnologia acessível e bonita</span>.
          </p>
          <ul className={styles.formacaoLista}>
            <ABCard title="CST" course="Análise de Desenvolvimento de Sistemas" institution="UniCesumar" year="2026 -" />
            <ABCard title="Mestrado" course="Genética e Biologia Molecular" institution="UFRGS" year="2024 - 2026" />
            <ABCard title="Bacharel" course="Biotecnologia" institution="IFMT" year="2020 - 2024" />
          </ul>
        </div>

        <div className={styles.cursosWrapper}>
          <h3 className="littleTitle">Cursos intensivos</h3>
          <ul className={styles.cursosContent} >
            <li className={styles.cursosItem} >HTML</li>
            <li className={styles.cursosItem} >CSS</li>
            <li className={styles.cursosItem}>Algoritmo</li>
            <li className={styles.cursosItem}>JavaScript</li>
            <li className={styles.cursosItem}>TypeScript</li>
            <li className={styles.cursosItem}>React</li>
            <li className={styles.cursosItem}>Design</li>
            <li className={styles.cursosItem}>Git</li>
            <li className={styles.cursosItem}>GitHub</li>
          </ul>
        </div>
        <div className={styles.idiomas} >
          <h3 className="littleTitle">Idiomas</h3>

          <p>
            <strong>Inglês</strong> / Fluente
          </p>
          <p>
            <strong>Espanhol</strong> / Básico
          </p>
        </div>
      </div>
    </section>
  );
};

export default AcademicBackground;
