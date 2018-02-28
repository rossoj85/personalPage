import p5 from 'p5';



export default function sketch (p) {
    // console.log('INDISE LNADING PAGE MATRIX')
   
    var symbol; 
    var symbolSize = 24;
    var streams = [];
    let availWidth = window.screen.availWidth
    let availHeight = window.screen.availHeight
    console.log('Max Width', window.screen.availWidth)
    console.log('Max Height', window.screen.availHeight)
    let maxWidth;
    availWidth>availHeight ? maxWidth=availWidth: maxWidth=availHeight;
    console.log('MaxWidth', maxWidth)
    p.setup = function (){ 
        p.createCanvas(
            maxWidth,//might have ot change when intergrate into site
            window.innerHeight * 0.8
        );

        p.background(0, 900);

        var x = 0;
        var y = p.random(-1000, 0);
        // console.log(p.width)
        // console.log(p.height)
        // console.log('symbol size', symbolSize)
        // console.log('constructor', Stream)
        // console.log('p.width / p.symbolSize;', +p.width /symbolSize)
        // console.log(p)
        for(var i = 0; i<= p.width / symbolSize; i++){
            // console.log('HELLO')
            var stream = new Stream();
            stream.generateSymbols(x,y);
            streams.push(stream);
           
            x += symbolSize
        }
        p.textSize(p.symbolSize);
        // console.log('INSIDE SETUP!!')
        // console.log(streams)
    }   
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        console.log(props)
        console.log('MAX WIDTH@#!$#', maxWidth)
        console.log('Inside Matrix Width',props.width,'Inside Matrix Height', props.height)
        p.resizeCanvas(props.width, props.height*0.8);
      };
   
    p.draw = function(){
    p.background(6, 125) //we want tohe background to re-render for each symbol. second arg is opacity
    // console.log('inside DRaw@$#!@#!$@!#$@!@$#')
   
    streams.forEach((stream)=>{
        
        stream.render();
    })
}
function Symbol(x, y, speed, first){ //x and y is position on canvas
    this.x = x;
    this.y = y;
    this.value;
    this.speed=speed;
    this.switchInterval = p.round(p.random(2,20));
    this.first = first;

    this.setToRandomSymbol = function(){
        if(p.frameCount % this.switchInterval == 0){ // framecount is built in p5 var. whenever framerate divieds evenly into framcount execute this line of code 
                // here we use unicode to bring up the foreign symbols
            this.value = String.fromCharCode(
                0x30A0 + p.round(p.random(0,96)) //look around 8 min for explaination
            );
        }
    }
   
    this.rain = function(){
        this.y = this.y>= p.height ? 0 : this.y+= this.speed;
    }
}

function Stream(){
    this.symbols = [];
    this.totalSymbols = p.round(p.random(5,30)) //each stram will have a random number of symbols. reduce this to get less symbols
    this.speed = p.random(2, 8);

    this.generateSymbols = function(x,y){
        var first = p.round(p.random(0,4)) ==1;

        for(var i= 0; i<= this.totalSymbols; i++){
            symbol = new Symbol(x, y, this.speed, first);
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            y -= symbolSize  //this is to stack the symbols on top of each other 24:30 for explaination. if oyu want to space them out more do it here
            first = false;
        }
        
    }
    this.render = function(){
        
        this.symbols.forEach((symbol)=>{
            //(0,255,70) === matrix green
            symbol.first ? p.fill(180, 255, 180): p.fill(0,255,70);
            p.text(symbol.value, symbol.x, symbol.y);
                symbol.rain()
                symbol.setToRandomSymbol()
        });
        //can also have the symbols themselves carry the above responsibilits
        // console.log(this.symbols)
    }
    
  }
 
}