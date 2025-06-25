// Last updated: 6/25/2025, 3:35:26 PM
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map();
    const stack = [];
    map.set("(", ")");
    map.set("{", "}");
    map.set("[", "]");    
    map.set(")", "(");    
    map.set("}", "{");    
    map.set("]", "[");
    const str = "({["
   
   for(let el of s) {
       if(str.includes(el)) {
           stack.push(el)
           console.log("if", el)
       } else {
           console.log("else", el)
          if(stack[stack.length - 1] === map.get(el)) {
             stack.pop()
          } else {
             return false
          }
       }
   }

   return stack.length == 0
};