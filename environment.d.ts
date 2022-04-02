declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "test" | "production";
      PORT: number;

      DB_HOST: string;
      DB_USER: string;
      DB_DATABASE: string;
      DB_PASS: string;
    }
  }
}

export {};
