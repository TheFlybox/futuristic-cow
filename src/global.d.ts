export type Environment = {
  production: boolean;
  configCatKey: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONFIG_CAT_KEY_PRODUCTION: string;
      CONFIG_CAT_KEY_DEVELOPMENT: string;
    }
  }
}