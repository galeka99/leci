module.exports = {
  port           : process.env['NODE_ENV'] == "production" ? 3000 : 8080,

  //=================== CORS CONFIGURATION ===================//
  cors           : {
    enable        : true,
    config        : { }
  },
  //=================== CORS CONFIGURATION ===================//

  //=============== BODY PARSER CONFIGURATION ================//
  bodyparser     : {
    enable        : true,
    config        : { extended: false }
  },
  //=============== BODY PARSER CONFIGURATION ================//

  //================= DATABASE CONFIGURATION ================//
  database       : {
    enable        : false,
    dialect       : "mysql",
    logging       : false,
    pool          : {
      enable        : false,
      min           : 0,            // minimum connection(s)
      max           : 500,          // maximum connection(s)
      idle          : 10000         // idle time, automatic disconnect when connection idle for several time (in millisecond)
    },
    development   : {
      hostname      : "localhost",
      username      : "galang",
      password      : "galang",
      dbname        : "dev",
      port          : 3306
    },
    production      : {
      hostname      : "localhost",
      username      : "galang",
      password      : "galang",
      dbname        : "prod",
      port          : 3306
    }
  },
  //================= DATABASE CONFIGURATION ================//

  //=================== LOGS CONFIGURATION =================//
  logs: {
    enable: true,
    format: 'YYYY/MM/DD HH:mm:ss'
  }
  //=================== LOGS CONFIGURATION =================//
}