export const BASE_URL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000"
    : "https://form-data-storing.vercel.app";
