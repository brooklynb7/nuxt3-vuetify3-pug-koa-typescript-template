

import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export interface Config {
  host: string,
  port: number,
  isDevMode: boolean,
  basePath: string,
  session: {
    secretKey: string
  }
  openaiApiKey: string,
  openaiOrg: string
}

const config: Config = {
  host: '0.0.0.0',
  port: +(process.env.KOA_PORT || 3000),
  isDevMode: process.env.NODE_ENV === "development",
  basePath: process.env.BASE_PATH || '/BASE_PATH/',
  session: {
    secretKey: process.env.SESSION_SECRET_KEY || 'SESSION_SECRET_KEY'
  },
  openaiApiKey: process.env.OPENAI_API_KEY || '',
  openaiOrg: process.env.OPENAI_API_ORG || ''
};

export { config };