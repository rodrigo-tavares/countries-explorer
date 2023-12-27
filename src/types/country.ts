export type Country = {
  name: {
    common: string;
  };
  capital: string;
  cca2: string;
  currencies: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  region: string;
  languages: {
    [code: string]: string;
  };
  population: number;
  flags: {
    png: string;
    svg: string;
  };
};
