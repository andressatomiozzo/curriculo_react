import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} id="contato">
      <div className={`secao ${styles.wrapper}`}>
        <div className={styles.informacao}>
          <h2 className="hidden">Informações de contato</h2>
          <p>Quer me conhecer um pouco mais?</p>
          <p>Baixe aqui o meu <a href="../../public/ProfileFeedback.pdf" download="ProfileFeedback.pdf">teste de perfil</a> realizado pela Mindset</p>
        </div>
        <div className={styles.contato}>
          <p className={styles.contatoTitulo}>Entre em contato:</p>
          <div className={styles.contatoContent}>
            <span className={styles.bold}>Email</span> andressatomiozzo9@gmail.com
          </div>
          <div className={styles.contatoContent}>
            <span className={styles.bold}>Telefone</span> +55 (65) 99985-5542
          </div>
          <div className={styles.contatoContent}>
            <span className={styles.bold}>Redes sociais</span>
            <div>
              <a href="https://github.com/andressatomiozzo" target="_blank" rel="external" className={`${styles.icon} ${styles.github}`}></a>
              <a href="https://www.linkedin.com/in/andressa-tomiozzo/" target="_blank" rel="external" className={`${styles.icon} ${styles.linkedin}`}></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

<p>
  Me siga nas minhas <a href="https://github.com/andressatomiozzo">redes sociais</a>
</p>;
