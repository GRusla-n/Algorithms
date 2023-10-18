const input = [1, 1, 1, 1, 2, 3, 3, 4, 5, 7, 7]

// Solved but not using multiple pointers...
const countUniqValue = (array) => {
    if (!array.length) return 0
    const hash = {}

    for (let i = 0; i < array.length; i++) {
        if (!hash[array[i]]) hash[array[i]] = 1
    }

    return Object.keys(hash).length
}

const countUniqValueV2 = (array) => {
    let uniqNumbers = array.length ? 1 : 0

    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] !== array[i]) uniqNumbers++
    }

    return uniqNumbers
}


// Using multiple pointers pattern
const countUniqValueV3 = (array) => {
    let i = 0

    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]){
            i++
            array[i] = array[j]
        }
    }

    return i + 1
}

console.log(countUniqValue(input))
console.log(countUniqValueV2(input))
console.log(countUniqValueV3(input))