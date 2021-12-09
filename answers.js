// Task #1: Create a 2D array of size row_count x col_count. Fill the array with 0.

function make_row(col_count) {
    let row = []
    for(let i = 0; i < col_count; i++){
        row.push(0)
    }
    console.log(row)
    return row
}

// Answer #1: 

function solution(row_count, col_count) {
    let result = []
    for(let j = 0; j < row_count; j++){
        let r = make_row(col_count)
        result.push(r)
    }
    return result
}

// Task #2: Create a square 2D array of size size x size. Fill the array with 0.

// Then draw a line of 1s down the main diagonal.

// This is called an identity matrix.

// Answer #2: 

function make_row(size) {
    let row = []
    for(let i = 0; i < size; i++){
        row.push(0)
    }
    return row
}

function solution(size) {
    let result = []
    for(j = 0; j < size; j++){
        let matrix = make_row(size)
        result.push(matrix)
        result[j][j] = 1
    }
    return result
}

// Task #3: There is a bug in one line of the code. Find it, fix it, and submit.
// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Answer #3: 

function solution(picture) {

  var answer = [''];

  for (var i = 0; i <= picture[0].length + 1; i++) {
    answer[0] += '*';
  }

  for (var i = 0; i < picture.length; i++) {
    answer.push('*');
    for (var j = 0; j < picture[0].length; j++) {
      answer[i + 1] += picture[i][j];
    }
    answer[i + 1] += '*';
  }

  answer.push(answer[0]);

  return answer;
}

// Task #4: Return a substring (part of a string) between two indexes.

// The substring from index a up to (but not including) index b should be returned.

// If a is less than 0, treat it like 0.

// If b is greater than the length of the string, treat it like the length of the string.

// If b is less than a, return an empty string.

// Answer #4: 

function solution(s, a, b) {
    let result = ''
    if(a < 0){
        for(let i = 0; i < b; i++){
            result += s[i]
        }
        return result
    }else if(b > s.length){
        for(let i = a; i < s.length; i++){
            result += s[i]
        }
        return result
    }else if(b < a){
        return ''
    }else{
        for(let i = a; i < b; i++){
            result += s[i]
        }
        return result
    }
}

// Task #5: Given a number, return the number of digits.

// You may not use strings to solve this challenge.

// You might have to get mathy for this one.

// Answer #5: 

function solution(n) {
    let digits = Math.log(n) * Math.LOG10E + 1 | 0
    return digits
}

// Task #6: Write a function that builds an n x n multiplication table.

// The result will be a 2D array. The 0th row and column of the table begin with 1 and end with n.

// Answer #6: 

function make_row(n, j) {
    let row = []
    for(let i = 1; i <= n; i++){
        row.push(i * (j + 1))
    }
    return row
}

function solution(n) {
    let result = []
    for(let j = 0; j < n; j++){
        let rows = make_row(n, j)
        result.push(rows)
    }
    return result
}

// Task #7: This function should scan an array for certain elements and remove them.

// Answer #7: 

function solution(a, x) {
    for(let i = 0; i < a.length; i++){
        if(a[i] == x){
            a.splice(i, 1)
        }
    }
    return a
}

// Task #8: You have an array p of points on a Cartesian plane. Find and return the minimum possible Euclidian distance between two points with different indices in p.

// Answer #8 (in Python): 

// def dist(x0, y0, x1, y1):
//     distance = math.sqrt((x0 - x1)**2 + (y0 - y1)**2)
    
//     return distance
    
// # Simplify: Find the coordinate that's closest to 0,0
// #            "    "      "      with smallest distance to 0,0
// def solution(p):
//     smallest_so_far = 999999999999  # Infinity
    
//     for point0_num in range(0, len(p)):
//         point0 = p[point0_num]
        
//         for point1_num in range(point0_num + 1, len(p)):
//             point1 = p[point1_num]
            
//             distance = dist(point0[0],point0[1], point1[0],point1[1])
            
//             if distance < smallest_so_far:
//                 smallest_so_far = distance
                
//     return smallest_so_far

// Task #9: An odometer palindrome is the when the mileage on your odometer is the same when the digits are reversed. For example, 123321.

// Assume your odometer is 6 digits and does not show 10ths of miles/kilometers.

// The question is, for a given current odometer reading, when is the next odometer palindrome?

// If the odometer is currently at a palindrome, we're still interested in the next one.

// The input is an integer, but the result should be a string padding with leading zeros to 6 places.

// Answer #9: ?