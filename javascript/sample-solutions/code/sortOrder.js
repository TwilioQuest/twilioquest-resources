const arg1 = process.argv[2].toLowerCase()
const arg2 = process.argv[3].toLowerCase()

if (arg1 < arg2){
    console.log(-1)
} else if (arg1 > arg2) {
    console.log(1)
} else {
    console.log(0)
}
