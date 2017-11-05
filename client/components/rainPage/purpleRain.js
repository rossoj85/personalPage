import p5 from 'p5';
import {default as RainDrop} from './purpleRainObject'




export default function sketch (p) {
    console.log("THIS IS P",p)
    console.log(p.random)
    console.log("Raindrop Object",RainDrop)
    var width = document.getElementById('sceneWrapper').offsetWidth;
    // console.log(width)
    let rainDrops = []
  
    p.setup = function () {
     p.createCanvas(1200,600);
      for( var i =0; i<850; i++){
        rainDrops[i]= new RainDrop(p)
        // console.log(rainDrops)
        }
    };
  
  
    p.draw = function () {
      p.background(230, 230, 250);
      for (var i= 0; i<rainDrops.length;i++){
        rainDrops[i].show()
        rainDrops[i].fall()
        }
    };
  };