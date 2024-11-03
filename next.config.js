// next.config.js
module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      oracledb: false,    // Bỏ qua oracledb
      mysql: false,       // Bỏ qua mysql
      mssql: false,       // Bỏ qua mssql
      sqlite3: false,     // Bỏ qua sqlite3
      'pg-native': false, // Bỏ qua pg-native nếu không sử dụng
    };
    return config;
  },
};
