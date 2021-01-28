function calculatePower(nums){
    let nums2 = nums.map(function(s){
        return s*2
    })

    return nums3 = nums2.reduce(function(acc, s){
        return acc += s
    }, 0)
}

const laserPower = calculatePower([1, 3, 8]);
console.log('Required laser power is ' + laserPower);