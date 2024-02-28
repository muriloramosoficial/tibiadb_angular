export interface BBosses {
  boostable_bosses: BoostableBosses;
  information: Information;
}

export interface BoostableBosses {
  boosted: Boosted;
  boostable_boss_list: BoostableBossList[];
}

export interface Boosted {
  name: string;
  image_url: string;
  featured: boolean;
}

export interface BoostableBossList {
  name: string;
  image_url: string;
  featured: boolean;
}

export interface Information {
  api: Api;
  timestamp: string;
  status: Status;
}

export interface Api {
  version: number;
  release: string;
  commit: string;
}

export interface Status {
  http_code: number;
}
