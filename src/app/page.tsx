import styles from "./page.module.scss";
import Banner from "@/components/Banner/Banner";
import CardHome from "@/components/CardHome/CardHome";

export default function Home() {
  return (
    <>
      <section className={styles.Home}>
        <Banner
          img="bannerHome.png"
          imgMobile="bannerHomeMobile.png"
          title="Bem-vindos a "
          titleBold="Cidade de Liones"
          text="Bem-vindo ao mundo mágico de Liones! Aqui, você encontrará uma cidade cheia de vida e diversidade, onde elfos, anões, humanos e muitas outras espécies convivem em harmonia."
        />
        <div className={styles.CardsHome}>
          <CardHome
            img="home-atualizacoes.jpg"
            title="Atualizações"
            text="Clicando nesse card você poderá saber todas as novidades que estão sendo implementadas no sistema."
            url="/sistema/atualizacoes"
          />
          <CardHome
            img="home-livro-do-jogador.jpg"
            title="Livro do Jogador"
            text="O livro que contém todas as informações sobre o sistema. Não esqueça de ler o livro do jogador antes de começar a jogar."
            url="/sistema/livro-do-jogador"
          />
          <CardHome
            img="home-racas-e-classes.jpg"
            title="Raças e Classes"
            text="Aqui você terá a descrição de todas as raças e classes que estão disponíveis no sistema e como elas funcionam."
            url="/personagem/racas-e-classes"
          />
        </div>
      </section>
    </>
  );
}
