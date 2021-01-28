function calculateMass(strings){
    let totalLength = strings.reduce(function(acc, s){
        return acc += s.length
    }, 0)
    return totalLength
}

const cargo = ['cat', 'dog', 'bird'];
console.log(calculateMass(cargo))