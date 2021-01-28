const arg = process.argv[2]

if ((arg % 3) === 0 && (arg % 5) === 0){
    console.log("JavaScript")
} else if (arg % 3 === 0){
    console.log("Java")
} else if (arg % 5 === 0){
    console.log("Script")
} else {
    console.log(arg)
}