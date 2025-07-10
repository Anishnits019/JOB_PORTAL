export const safeHSet = async (redis, key, data) => {
  await redis.hset(key, ...Object.entries(data).flat());
};