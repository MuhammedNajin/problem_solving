// Last updated: 6/25/2025, 3:29:41 PM
/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    let count = 0;
    batteryPercentages.forEach((el, i) => {

      if(batteryPercentages[i] - count > 0) count++   
      
    })
    
 return count;
  
};