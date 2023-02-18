// Algo 1: loop through a string and console.log every character in the string
const loopStrAndLog = ((str) => {
    str.split('').map( letter => {
        console.log(letter);
    })
})

loopStrAndLog("Danny")



// Algo 2: Given a string, return true if the string is a palindrome, and false otherwise.
// Palindrome means the word is the same read backwards example mom, dad, racecar, kayak are all palindrome but racecars, fast, hug are examples that are not palindrome

const palindromeTrueOrFalse = (str) => {
    let string1 = str.split("")
    let stringTwo = str.split("")
    
    for (let i = 0; i < stringTwo.length / 2; i++) {
        let temp = stringTwo[i]
        stringTwo[i] = stringTwo[stringTwo.length - i - 1]
        stringTwo[stringTwo.length - i - 1] = temp
    }
    if(string1.join() === stringTwo.join()) {
        return true
    } else {
        return false
    }
    
}
console.log(palindromeTrueOrFalse('mom'));  