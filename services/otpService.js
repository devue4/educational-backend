const crypto = require("crypto");
const redisService = require("./redisService");

function generateOtp(length = 6) {
  const otp = crypto.randomInt(10 ** (length - 1), 10 ** length);
  return otp.toString();
}

async function saveOtp(phone, otp, expireInSeconds = 120) {
  await redisService.setValue(`otp:${phone}`, otp, expireInSeconds);
}

async function verifyOtp(phone, otp) {
  const savedOtp = await redisService.getValue(`otp:${phone}`);
  if (!savedOtp) return false;

  if (savedOtp === otp) {
    await redisService.deleteValue(`otp:${phone}`);
    return true;
  }

  return false;
}

module.exports = {
  generateOtp,
  saveOtp,
  verifyOtp,
};
