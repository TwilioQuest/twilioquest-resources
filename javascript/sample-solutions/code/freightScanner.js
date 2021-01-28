function scan(strings){
    let contraband = 0
    strings.forEach(function(s){
        if (s === "contraband"){
            contraband += 1
        }
    })
        
    return contraband
}