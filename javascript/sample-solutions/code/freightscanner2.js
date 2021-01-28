function scan(strings){
    let outArr = []
    strings.forEach(function(s, i){
        if (s === "contraband"){
            outArr.push(i)
        }
    })
    return outArr
}