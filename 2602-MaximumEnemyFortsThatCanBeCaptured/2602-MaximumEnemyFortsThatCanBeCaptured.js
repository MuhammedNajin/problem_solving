// Last updated: 6/25/2025, 3:31:04 PM
/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
     let prev=0,max=0
   for(let i=0;i<forts.length;i++){
       if(forts[i]){
           if(forts[prev] &&forts[prev]!==forts[i]){
               max=Math.max(max,i-prev-1)
           }
           prev=i
       }
   }
    return max
};