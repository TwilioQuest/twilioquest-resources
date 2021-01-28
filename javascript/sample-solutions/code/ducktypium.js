class Ducktypium{
    constructor(color){
        if (color !== "red" && color !== "blue" && color !== "yellow"){
            throw new Error("dun goofed")
        }
        this.color = color
        this.calibrationSequence = []
    }
    refract(color){
        if (color !== "red" && color !== "blue" && color !== "yellow"){
            throw new Error("dun goofed")
        }
        
        if (color === this.color){ return color }
        else if (color === "red"){
            if (this.color === "blue"){
                return "purple"
            }
            if (this.color === "yellow"){
                return "orange"
            }
        } 
        else if (color === "blue"){
            if (this.color === "red"){
                return "purple"
            }
            if (this.color === "yellow"){
                return "green"
            }
        }
        else if (color === "yellow"){
            if (this.color === "blue"){
                return "green"
            }
            if (this.color === "red"){
                return "orange"
            }
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