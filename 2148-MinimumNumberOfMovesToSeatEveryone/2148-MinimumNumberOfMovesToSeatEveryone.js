// Last updated: 6/25/2025, 3:31:45 PM
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let totalNoOfMoves = 0;
    const length = seats.length;
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    console.log(seats, students)
    for(let i = 0; i < length; i++) {
        if(students[i] != seats[i] )
          totalNoOfMoves += Math.abs(students[i] - seats[i]);  
    }

    return Math.abs(totalNoOfMoves);
};