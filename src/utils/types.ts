export type Currency = {
  id: number;
  name: string;
  acronym: string;
  country: string;
  value?: number;
};

export type ResponseApi = {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
};
