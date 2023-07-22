interface IPersonagem {
  // ----- Atributos -----
  forca: number;
  destreza: number;
  constituicao: number;
  carisma: number;
  inteligencia: number;
  sabedoria: number;

  // ----- Virtudes -----
  potencia: number;
  aceleracao: number;
  fortitude: number;
  majestade: number;
  invocacao: number;
  determinação: number;

  // ----- Arma -----
  arma: string;
  tipoArma: string;
  materialArma: string;
  maosArma: number;

  // ----- Talento -----
  talento: string[];
  nivelTalento: number[];

  // ----- Nível -----
  nivelPersonagem: number;

  // ----- Raça -----
  racaNome: string;

  // ----- Classe -----
  classeNome: string;

  // ----- Escudo -----
  escudo: string;

  // ----- Dano -----
  dano: string;

  // ----- Transclasse -----
  tranclasse: string[];
  nivelTransclasse: number[];

  // ----- Status -----
  pontosVida: number;
  vidaRegen: number;
  pontosMana: number;
  manaRegen: number;
  acerto: number;
  esquiva: number;
  iniciativa: number;
  deslocamento: number;
  forVontade: number;
  armadura: number;
  resMagica: number;
  resNatural: number;
  percepcao: number;
  hitsTurno: number;
  carismaTestes: number;
  perícias: number;
}

export const initialPersonagemValues: IPersonagem = {
  // ----- Atributos -----
  forca: 0,
  destreza: 0,
  constituicao: 0,
  carisma: 0,
  inteligencia: 0,
  sabedoria: 0,

  // ----- Virtudes -----
  potencia: 0,
  aceleracao: 0,
  fortitude: 0,
  majestade: 0,
  invocacao: 0,
  determinação: 0,

  // ----- Arma -----
  arma: "",
  tipoArma: "",
  materialArma: "",
  maosArma: 0,

  // ----- Talento -----
  talento: [""],
  nivelTalento: [0],

  // ----- Nível -----
  nivelPersonagem: 0,

  // ----- Raça -----
  racaNome: "",

  // ----- Classe -----
  classeNome: "",

  // ----- Escudo -----
  escudo: "",

  // ----- Dano -----
  dano: "",

  // ----- Transclasse -----
  tranclasse: [""],
  nivelTransclasse: [0],

  // ----- Status -----
  pontosVida: 0,
  vidaRegen: 0,
  pontosMana: 0,
  manaRegen: 0,
  acerto: 0,
  esquiva: 0,
  iniciativa: 0,
  deslocamento: 0,
  forVontade: 0,
  armadura: 0,
  resMagica: 0,
  resNatural: 0,
  percepcao: 0,
  hitsTurno: 0,
  carismaTestes: 0,
  perícias: 0,
};

console.log(initialPersonagemValues);
