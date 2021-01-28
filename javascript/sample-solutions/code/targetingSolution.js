class TargetingSolution{
    constructor(target){
        this.x = target.x
        this.y = target.y
        this.z = target.z
    }
    target(){
        return "("+this.x+", "+this.y+", "+this.z+")"
    }
}