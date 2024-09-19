import * as Yup from 'yup';

export const ENV_MODE = import.meta.env.ENV_MODE === "production" ? "production" : "local";


type EnvConfig = {
  VITE_JAVA_BASE_URL: string;
};

let envConfig: EnvConfig = {
  VITE_JAVA_BASE_URL: "",
};

const envSchema = Yup.object({
  VITE_JAVA_BASE_URL: Yup.string()
    .url()
    .required(`VITE_JAVA_BASE_URL is missing from .env.${ENV_MODE}`),
});

try {
  envConfig = envSchema.validateSync({
    VITE_JAVA_BASE_URL: import.meta.env.VITE_JAVA_BASE_URL,
  }, { abortEarly: false });
  console.log("Environment variables are valid");

} catch (error) {
  if (error instanceof Yup.ValidationError) {
    console.error("Environment variable validation errors:");
    error.inner.forEach(err => console.error(err.message));
    throw new Error("Invalid environment variables");
  }
}

export default envConfig;
