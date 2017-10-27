 export default function RainDrop(p){
    this.x= p.random(p.width);
    this.y= p.random (-500, -50)
    this.z = p.random(0,20);
    this.yspeed = p.map(this.z,0,20,4,10);
    this.length = p.map(this.z,0,20,10,20);
    
    this.fall =()=>{
        this.y =this.y+ this.yspeed;
        let gravity = p.map(this.z,0, 20, 0, 0.2);
        this.yspeed = this.yspeed + 0.2;
        
        if(this.y>p.height){
            this.y= p.random(-200,-100);
            this.yspeed= p.map(this.z,0,20,4,10)
        }
        }
    
    this.show = ()=>{
        let thick = p.map(this.z,0,20,1,3);
        p.strokeWeight(thick)
        p.stroke(138, 43, 226);
        p.line(this.x, this.y, this.x,this.y+this.length);
        }
    }