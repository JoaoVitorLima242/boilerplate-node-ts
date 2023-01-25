import * as dotenv from 'dotenv'

dotenv.config()

export const config: {
  PORT: number
  MONGO_URI: string
  // AWS_ACCESS_ID: string
  // AWS_SECRET_ACCESS: string
  // BUCKET_NAME: string
  // BUCKET_REGION: string
} = {
  PORT: Number(process.env.PORT) ?? 8080,
  MONGO_URI: String(process.env.MONGO_URI),
  // AWS_ACCESS_ID: String(process.env.AWS_ACCESS_KEY),
  // AWS_SECRET_ACCESS: String(process.env.AWS_SECRET_KEY),
  // BUCKET_NAME: String(process.env.AWS_BUCKET_NAME),
  // BUCKET_REGION: String(process.env.AWS_BUCKET_REGION),
}
