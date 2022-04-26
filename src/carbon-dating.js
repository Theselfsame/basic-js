const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity ) {
  if (!parseFloat(sampleActivity)) {
    return false;
  }
  if(typeof sampleActivity != 'string') {
    return false;
  }
  if (parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > 15) {
    return false
  }
  const k = 0.693 / HALF_LIFE_PERIOD;

  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k)
}

module.exports = {
  dateSample
};