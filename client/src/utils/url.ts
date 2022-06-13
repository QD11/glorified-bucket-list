const development = "http://localhost:4000";
const production = "https://glorified-bucket-list.herokuapp.com";

export const API_URL =
    process.env.NODE_ENV === "development" ? development : production;
