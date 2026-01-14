import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redis = new Redis(process.env.UPSTASH_REDIS_URL);

redis.on("connect", () => {
	console.log("Redis connected successfully");
});

redis.on("error", (err) => {
	console.error("Redis connection error:", err);
});

/* ✅ ADD THIS LINE */
export { redis };

/* ✅ KEEP THIS */
export default redis;
