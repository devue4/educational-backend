const redis = require("redis");

const client = redis.createClient({
  url: process.env.REDIS_URL || "redis://127.0.0.1:6379" ,
});

client.on("error", (err) => {
  console.error("Redis error:", err);
});

client.connect();

async function setValue(key, value, expireInSeconds = 300) {
  try {
    await client.set(key, value, {
      EX: expireInSeconds,
    });
  } catch (err) {
    console.error("Redis set error:", err);
  }
}

async function getValue(key) {
  try {
    return await client.get(key);
  } catch (err) {
    console.error("Redis get error:", err);
    return null;
  }
}

async function deleteValue(key) {
  try {
    await client.del(key);
  } catch (err) {
    console.error("Redis delete error:", err);
  }
}

module.exports = {
  setValue,
  getValue,
  deleteValue,
};
