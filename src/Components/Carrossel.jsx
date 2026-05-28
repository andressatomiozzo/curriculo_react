import React from "react";
import styles from "./Carrossel.module.css";

// Importando as imagens
import apple from "../assets/projetos/apple.png";
import velo_e_vogue from "../assets/projetos/velo_e_vogue.png";
import viva_decor from "../assets/projetos/viva_decor.png";
import dogs from "../assets/projetos/dogs.png";

const Carrossel = () => {
  const [indexAtual, setIndexAtual] = React.useState(0);
  const imagens = [
    { img: dogs, link: "https://dogs-wine.vercel.app/" },
    { img: apple, link: "https://andressatomiozzo.github.io/clone-apple/" },
    { img: velo_e_vogue, link: "https://andressatomiozzo.github.io/projeto-velo-e-vogue/" },
    { img: viva_decor, link: "https://andressatomiozzo.github.io/projeto-interior_design/" },
  ];
  const indexTotal = imagens.length;
  let active;

  const handleClick = (index) => {
    setIndexAtual((index + indexTotal) % indexTotal);
  };

  const handleLinkClick = (event, index) => {
    event.preventDefault();
    setIndexAtual((index + indexTotal) % indexTotal);
  };

  const autoplayId = React.useRef(null);
  const stopAutoplay = () => clearInterval(autoplayId.current);
  const startAutoplay = React.useCallback(() => {
    stopAutoplay();
    autoplayId.current = setInterval(() => setIndexAtual((indexAtual) => (indexAtual + 1) % indexTotal), 5000);
  }, [indexTotal]);

  React.useEffect(() => {
    startAutoplay();
    return stopAutoplay();
  }, [startAutoplay]);

  return (
    <div className={styles.container} onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
      <div className={styles.viewport}>
        {imagens.map((imagem, i) => {
          let classe;

          if (i === (indexAtual - 1 + indexTotal) % indexTotal) {
            classe = styles.prev;
            active = false;
          } else if (i === indexAtual) {
            classe = styles.active;
            active = true;
          } else if (i === (indexAtual + 1) % indexTotal) {
            classe = styles.next;
            active = false;
          } else {
            classe = styles.hidden;
            active = false;
          }

          return (
            <a key={i} href={imagem.link} onClick={active ? null : () => handleLinkClick(event, i)}>
              <img src={imagem.img} alt={`Imagem ${i + 1}`} className={`${styles.img} ${classe}`} />
            </a>
          );
        })}
      </div>
      <div className={styles.dotsContainer}>
        {imagens.map((imagem, i) => (
          <button
            className={`${styles.dot} ${i === indexAtual && styles.dotActive}`}
            aria-label={`Ir para a imagem ${i + 1}`}
            onClick={() => handleClick(i)}
            key={i}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carrossel;
