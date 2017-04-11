module.exports = {
  getPercentage: function(maxSize, percent) {
    if(percent <= 100) {
      let val = (maxSize * percent) / 100;
      return val;
    } else {
      return 'Percent must be less than 100';
    }
  },
}
