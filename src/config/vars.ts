export const vars ={
  mongoConnectionUrl: 'mongodb://admin:admin@localhost:27017/cqrs-event-sourcing-query-db?authSource=admin',
  appId: process.env.APPID ? process.env.APPID : 'STANDALONE',
}