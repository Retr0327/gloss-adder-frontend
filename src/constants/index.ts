const DISABLED = "DISABLED";
const RESET = "RESET";

const isProduction: boolean = process.env.NODE_ENV === "production";

const API: string = !isProduction ? "http://localhost:3000" : "/api";

const EXTERNAL_API: string = !isProduction
  ? "http://localhost:3000"
  : `http://api:${process.env.API_PORT}`;

export { API, EXTERNAL_API, DISABLED, RESET };
