import { Environment } from 'src/global';

export const environment: Environment = {
  production: true,
  configCatKey: process.env.CONFIG_CAT_KEY_PRODUCTION,
};
