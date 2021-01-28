function scanAndFilter(strings, fstring){
    let newArr = strings.filter(function(s){
        return s !== fstring
    })
    return newArr
}

const cargo = ['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'];

console.log(scanAndFilter(cargo, 'ray guns'))
// filteredCargo should now be ['apples', 'oranges', 'tacos']