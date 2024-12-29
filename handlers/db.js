const Keyv = require('keyv');
const db = new Keyv('sqlite://LightDaemon.db');

module.exports = { db }
