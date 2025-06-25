// Last updated: 6/25/2025, 3:32:12 PM
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {

    a = s.slice(0, s.length / 2);
    b = s.slice(s.length / 2 , s.length);
    let is = 0 ,  no = 0;
    

    const vowels = 'aeiouAEIOU';

    for(let i = 0; i < s.length; i++) {

        if(vowels.indexOf(a[i]) !== -1) {
            is++;
        }
        if(vowels.indexOf(b[i]) !== -1) {
            no++;
        }
    }
     
     return is === no;

};