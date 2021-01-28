// function largestSubarraySum(array) {
//     let sorted = array.sort((a, b) => {
//         if (a < b) {
//             return 1
//         }
//         if (a > b) {
//             return -1
//         }
//         return 0
//     })
    
//     let first = sorted.shift()
//     let sum = first + sorted.shift()
    
//     while (sum < (sum + sorted[0])) {
//         sum += sorted.shift()
//     }
//     return sum
// }

// [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array) {
    let max = 0;
    let end = 0;

    for (let i = 0; i<array.length; i++) {
        end += array[i]
        if (max < end) {
            max = end
        }
        if (end < 0) {
            end = 0
        }
    }
    return max
}
