const input = [1, 2, 3, 4, 5, 6, 7]

const maxSubarraySum = (arr, num) => {
    if (num > arr.length) return null
    let max = null

    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0

        for (let j = 0; j < num; j++) {
            temp += arr[i + j]
        }
        if (temp > max) {
            max = temp
        }
    }

    return max
}

const maxSubarraySumN = (arr, num) => {
    let sum = 0
    if (arr.length < num) return null

    for (let i = 0; i < num; i++) {
        sum += arr[i]
    }

    let temp = sum
    for (let i = num; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i]
        sum = Math.max(sum, temp)
    }

    return sum
}

console.log(maxSubarraySum(input, 3))
console.log(maxSubarraySumN(input, 3))