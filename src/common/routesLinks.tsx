export interface IRoutesLinks {
  label: string;
  to: string;
  img?: string;
}

export type IRoutes = (IRoutesLinks | IRoutesLinks[])[];

const routesLinks: IRoutes = [
  {
    label: "Liones RPG",
    to: "/",
  },
  // ------ Sistema ------
  [
    {
      label: "Sistema",
      to: "/sistema",
    },
    {
      label: "NPCs",
      to: "/sistema/npcs",
      img: "npcs.jpg"
    },
    {
      label: "História",
      to: "/sistema/historia",
      img: "historia.jpg"
    },
    {
      label: "Atualizações",
      to: "/sistema/atualizacoes",
      img: "atualizacoes.jpg"
    },
    {
      label: "Divindades",
      to: "/sistema/divindades",
      img: "divindades.jpg"
    },
    {
      label: "Continentes",
      to: "/sistema/continentes",
      img: "continentes.jpg"
    },
    {
      label: "Missões",
      to: "/sistema/missões",
      img: "missoes.jpg"
    },
    {
      label: "Montarias",
      to: "/sistema/montarias",
      img: "montarias.jpg"
    },
  ],
  // ------ Automatizador ------
  {
    label: "Automatizador",
    to: "/automatizador",
  },
  // ------ Personagem ------
  [
    {
      label: "Personagem",
      to: "/personagem",
    },
    {
      label: "Raças e Classes",
      to: "/personagem/racas-e-classes",
      img: "racas-e-classes.jpg"
    },
    {
      label: "Livro do Jogador",
      to: "/personagem/livro-do-jogador",
      img: "livro-do-jogador.jpg"
    },
    {
      label: "Caminhos Paragorn",
      to: "/personagem/caminhos-paragorn",
      img: "caminhos-paragorn.jpg"
    },
    {
      label: "Talentos",
      to: "/personagem/talentos",
      img: "talentos.jpg"
    },
    {
      label: "Itens",
      to: "/personagem/itens",
      img: "itens.jpg"
    },
    {
      label: "Criação",
      to: "/personagem/criacao-de-personagens",
      img: "criacao-de-personagens.jpg"
    },
  ],
  // ------ Downloads ------
  [
    {
      label: "Downloads",
      to: "/downloads",
    },
    {
      label: "Ficha de Personagem",
      to: "/downloads/ficha-de-personagem",
      img: "download.png"
    },
    {
      label: "Mochila",
      to: "/downloads/mochila",
      img: "download.png"
    },
  ],
];

export default routesLinks;