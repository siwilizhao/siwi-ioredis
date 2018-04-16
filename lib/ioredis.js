const IoRedis = require('ioredis')
let instance = null
class Redis {
    constructor(options) {
        if (!instance) {
            this.redisClient = new IoRedis(options)
            instance = this
        }
        return instance
    }
}
module.exports = Redis