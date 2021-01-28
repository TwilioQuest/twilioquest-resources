const argumentValue = process.argv[2]

if (argumentValue == 0){
    console.log("alive")
} else if (argumentValue == 1){
    console.log("flowering")
} else if (argumentValue == 2){
    console.log("shedding")
} else {
    console.log("other")
}