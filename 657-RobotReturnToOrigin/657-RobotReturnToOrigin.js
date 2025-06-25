// Last updated: 6/25/2025, 3:33:07 PM
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let RL = 0
    let UD = 0
   
    for(let i = 0; i < moves.length; i++) {
        if(moves[i] == 'U') RL++
        if(moves[i] == 'D') RL--
        if(moves[i] == 'L') UD++
        if(moves[i] == 'R') UD-- 
    }
    return RL === 0 && UD === 0
};