const config = {
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || "mysecret",
  MONGODB_SRV_STRING: process.env.MONGODB_SRV_STRING || "gg",
}

module.exports = config;