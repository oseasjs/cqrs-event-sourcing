const HOST = (process.env.DOCKER_HOST) ? process.env.DOCKER_HOST : 'localhost';

export const vars ={
  mongoConnectionUrl: 'mongodb://admin:admin@' + HOST + ':27017/cqrs-event-sourcing-query-db?authSource=admin',
  appId: process.env.APPID ? process.env.APPID : 'STANDALONE',
}