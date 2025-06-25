// Last updated: 6/25/2025, 3:30:25 PM
/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    
    return hours.filter((el) => el >= target).length;
};