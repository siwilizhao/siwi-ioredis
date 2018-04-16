const options = {
    port: 6379, // Redis port
    host: '192.168.10.10', // Redis host
    family: 4, // 4 (IPv4) or 6 (IPv6)
    password: '',
    db: 0
}
const Redis = require('../index')
const redis = new Redis(options).redisClient
const redis2 = new Redis(options).redisClient
console.log(redis === redis2)