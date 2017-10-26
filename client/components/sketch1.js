



export default function sketch (p) {
    let rainDrops = []
    console.log("THIS IS P",p)
    p.setup = function () {
      p.createCanvas(1264,600);
    };
  
    // p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    //   if (props.rotation){
    //     rotation = props.rotation * Math.PI / 180;
    //   }
    // };
  
    p.draw = function () {
      p.background(230, 230, 250);
      p.noStroke();
      p.push();
    //   p.rotateY(rotation);
    //   p.box(100);
      p.pop();
    };
  };