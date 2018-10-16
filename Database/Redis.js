const redis = require("redis")


const client = redis.createClient()

const redis_setup =  () => {
     client.on("connect", () => {
        console.log("Redis server connected");
    })
}

export {
    redis_setup
}