class Materializer {
    constructor(target){
        this.target = target
        this.activated = false
    }
    activate(){
        this.activated = true
    }
    
    materialize(){
        if (this.activated === true){
        return this.target 
        }
    }
    
}
