export interface UserServiceRes {
  equipe?: string;
  mail: string;
  nom: null | string;
  listeFiches: Fiche[];
  listeKanbansBoard: KanbansBoard[];
}

export interface KanbansBoard {
  id: number;
  nom: string;
}

export interface Fiche {
  id: number;
  position: number;
  libelle: string;
  date_butoire: Date;
  requiredTime: number;
  tags: string;
  lieu: string;
  url: string;
  note: string;
}
