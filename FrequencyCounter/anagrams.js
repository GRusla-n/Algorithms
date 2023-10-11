// O(n^2)
function anagramN2(string1, string2) {
    if (string1.length !== string2.length) return false


    const array2 = [...string2]

    for (let i = 0; i < string1.length; i++) {
        const index = array2.indexOf(string1[i])

        if (index === -1) {
            return false
        }

        array2.splice(index, 1)
    }

    return true
}

// O(n)
function anagramN(string1, string2) {
    const freqString1 = {}
    const freqString2 = {}

    if (string1.length !== string2.length) return false

    for (const char of [...string1]) {
        freqString1[char] = (freqString1[char] || 0) + 1
    }

    for (const char of [...string2]) {
        freqString2[char] = (freqString2[char] || 0) + 1
    }

    for (const key in freqString1) {
        if (!(key in freqString2)) {
            return false
        }

        if (freqString2[key] !== freqString1[key]) {
            return false
        }
    }

    return true
}