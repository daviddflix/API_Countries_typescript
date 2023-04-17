import { S3Client } from "@aws-sdk/client-s3";
import * as dotenv from 'dotenv';
dotenv.config();

const REGION = "sa-east-1";


const s3Client = new S3Client({ region: REGION, credentials: {
    accessKeyId: String(process.env.aws_access_key_id),
    secretAccessKey: String(process.env.aws_secret_access_key)
  } });
export { s3Client };