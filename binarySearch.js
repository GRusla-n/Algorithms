const array = Array(50).fill(1).map((el, index) => el * index * 3)

function binarySearch(arr, el) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((arr.length - 1) / 2)

    console.log(start, middle, end)

    while (start <= middle) {
        if (el < arr[middle]) end = middle - 1
        else start = middle + 1
        middle = Math.floor((start + end) / 2)

        console.log(start, middle, end)
    }

    return arr[middle] === el ? middle : -1
}

console.log(binarySearch(array, 27))