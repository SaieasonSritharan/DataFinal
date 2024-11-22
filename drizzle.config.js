/** @type{import ("drizzle-kit").config } */
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.js",
  dbCredentials: {
    url: "postgresql://carsales_owner:w73pCAsTgeLP@ep-soft-frost-a4p65xj2.us-east-1.aws.neon.tech/carsales?sslmode=require"
      }
});