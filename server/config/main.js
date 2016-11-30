export default {
  env: process.env.NODE_ENV || 'development',
  // Setting port for server
  port: process.env.PORT || 3000,
  // Database connection information
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/duff-boods',
  // Secret key for JWT signing and encryption
  secret: 'effervescent marsupial',
};
