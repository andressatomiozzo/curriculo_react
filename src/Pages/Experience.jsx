import ExperienciaCard from "../Components/ExperienciaCard";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={`secao ${styles.experiencia}`} id="experiencia" aria-label="Experiência">
      <h2 className={`subtitulo ${styles.subtitulo}`}>Experiência</h2>
      <div>
        <ExperienciaCard
          year="2023-24"
          company="TRC Agroflorestal LTDA"
          position="Estagiária"
          responsibilities="Fui responsável por desenvolver metodologias para otimizar a micropropagação in vitro de plantas."
          skills={["Resolução de problemas", "Pesquisa", "Criatividade"]}
        />

        <ExperienciaCard
          year="2021-22"
          company="FS Fueling Sustentability"
          position="Estagiária"
          responsibilities="Atuei na realização de análises físico-químicas, nutricionais e microbiológicas durante todo o processo de produção de etanol de milho."
          skills={["Trabalho em equipe", "Gestão do tempo"]}
        />

        <ExperienciaCard
          year="2020-21"
          company="Cartório do 2º ofício de LRV-MT"
          position="Auxiliar de cartório"
          responsibilities="Realizei tarefas administrativas e técnicas incluindo atendimento ao público, organização de documentos, reconhecimento de firma, autenticações e preparação de outros documentos legais."
          skills={["Organização", "Comunicação", "Adaptabilidade"]}
        />
      </div>
    </section>
  );
};

export default Experience;
