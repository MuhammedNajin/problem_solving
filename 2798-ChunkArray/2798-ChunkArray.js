// Last updated: 6/25/2025, 3:30:35 PM
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {


const length1 = arr.length;
 const nums = [];
    
    
 
   
   for(let i = 0; i < length1; i++)  {

       if(arr.length === 0) {
           break;
       }

       result = arr.splice(0, size)
       console.log(result)

      nums.push(result)


   }


      
   return nums;
        
 

    
};
