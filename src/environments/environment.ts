import { Environment } from 'src/global';

export const environment: Environment = {
  production: false,
  configCatKey: process.env.CONFIG_CAT_KEY_DEVELOPMENT,
};
