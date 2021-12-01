const dotenv = require('dotenv');

dotenv.config();
const { env } = process;

module.exports = {
  JWT: env.JWT_KEY,
  CLOUDINARY_CLOUD_NAME: env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: env.CLOUDINARY_API_SECRET,
  PORT: env.PORT || 7000,
  MONGODBURI: env.MONGODBURI,
  debug: env.debug,
};