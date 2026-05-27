import styles from "./ImgTecnologies.module.css"

const ImgTecnologies = ({src, alt, className}) => {
  return (
    <div className={`${styles.icon} ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImgTecnologies;
