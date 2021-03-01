class Ducktypium{
    constructor(color){
        this.validateColor(color)

        this.color = color
        this.calibrationSequence = []
    }

    validateColor(color) {
        const ALLOWED_COLORS = ["red", "yellow", "blue"]

        if (!ALLOWED_COLORS.some((allowed) => allowed === color)){
            throw new Error("NOT ALLOWED COLOR!")
        }
    }

    refract(color){
        this.validateColor(color)

        if (color === this.color){
            // If we have the same color refract doesn't change anything!
            return color
        }

        const refractedColors = [
            color,
            this.color,
        ];

        if (refractedColors.includes('red') && refractedColors.includes('blue')) {
            return 'purple';
        }

        if (refractedColors.includes('red') && refractedColors.includes('yellow')) {
            return 'orange';
        }

        if (refractedColors.includes('blue') && refractedColors.includes('yellow')) {
            return 'green';
        }
    }

    calibrate(nums){
        this.calibrationSequence = nums.sort().map(function(n){
            return n*3
        })
    }
}

try {
    const badColor = new Ducktypium('pink');
} catch(e) {
    console.log('Color must be red, yellow, or blue!');
}

// Create a new instance of the class
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]