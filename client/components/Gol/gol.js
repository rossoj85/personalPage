//THIS PROJECT WAS ORIGNALLY WRITTEN IN HTML AND CSS. THE ORIGNAL PROGRAMMING OF THE GAME HAS TRIED TO BEEN PRESERVED WITH SOME 
//SLIGHT FORMATTING TO MAKE IT FIT INTO A REACT COMPONENT


import React, { Component } from 'react';


export default class GOL extends Component{
    constructor(){
      super()
        this.state = { 
        width: 10, 
        height: 10, // width and height dimensions of the board
        stepInterval: null,
        boardDisplayed: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
        this.checkForOldBoard=this.checkForOldBoard.bind(this)
      }
    checkForOldBoard(evt){
      evt.preventDefault()
      var oldTable = document.getElementById('golBoard')
      console.log('old table', oldTable)
      if(this.state.boardDisplayed){
        console.log('OLD BOARD FOUND!!!')
        let oldBody=oldTable.firstChild
        console.log('oldBody',oldBody)
        let parent = oldBody.parentNode
        console.log('parent',parent)
        parent.removeChild(oldBody)
        this.createAndShowBoard()

      }else {
        console.log('No old borad found')
        this.addButtonListeners()
        this.createAndShowBoard()
        this.setState({boardDisplayed: true})
      }
    }

    createAndShowBoard(){
       // create <table> element
      var goltable = document.createElement("tbody");
      
      // build Table HTML
      var tablehtml = '';
      for (var h=0; h<this.state.height; h++) {
        tablehtml += "<tr id='row+" + h + "'>";
        for (var w=0; w<this.state.width; w++) {
          tablehtml += "<td data-status='dead' id='" + w + "-" + h + "'></td>";
        }
        tablehtml += "</tr>";
      }
      goltable.innerHTML = tablehtml;
      
      // add table to the #board element
      var board = document.getElementById('golBoard');
      console.log(board)
      console.log(goltable)
      // console.log(goltable.innerHTML)
      board.appendChild(goltable);
      
      // once html elements are added to the page, attach events to them
      this.setupBoardEvents();
    }

    forEachCell(iteratorFunc){
      // console.log('!!!!inside for each cell!!!!')
      for(var x=0;x<this.state.width;x++){
        for(var y=0;y<this.state.height;y++){
         
          let element = document.getElementById(`${x}-${y}`)
          // console.log('ELEMENT', element)
          iteratorFunc(element,x,y)
        }
      }
    }

    setupBoardEvents() {
      console.log('INSIDE SET UP BOARD EENTS')
      
      var onCellClick = function (e) {
          console.log('click')
        if (this.dataset.status == 'dead') {
          this.className = 'alive';
          this.dataset.status = 'alive';
        } else {
          this.className = 'dead';
          this.dataset.status = 'dead';
        }
        
      };
     
      var addListeners = function (element,x,y){
        // console.log(`adding listeners!!!!`)
        // console.log(element)
        // console.log(document.getElementById(`${x}-${y}`))
        element.addEventListener('click',onCellClick)
        // console.log('THIS ===',this)
      }
      // var clearAllCells = function(element,x,y){
      // //  let element= document.getElementById(`${x}-${y}`)
      //   element.className='dead'
      //   element.dataset.status='dead'
      //   console.log('FUCKING CLEARED')
      // }
      // var randomize=function(element,x,y){
      //   let num = Math.floor(Math.random()*2)
      //   console.log(num)
      //   // console.log(`${x}-${y}`)
      //   // let element =  document.getElementById(`${x}-${y}`)
      //   if(num){
      //     element.className='alive'
      //     element.dataset.status='alive'
      //   }
      // } 
  
      // var cell00 = document.getElementById('0-0');
      // cell00.addEventListener('click', onCellClick);
  
     
      //BOARD SET-UP FUNCTIONS
      this.forEachCell(addListeners)
      this.forEachCell(this.getNeighborhood)
  
       //BINDINGS
      this.step=this.step.bind(this)
  
      //Buttons 
      // document.getElementById('clear_btn').addEventListener('click',()=>{
      //   this.stopAutoPlay()
      //   this.forEachCell(clearAllCells)
        
      // })
      // document.getElementById('reset_btn').addEventListener('click',()=>{
      //   this.stopAutoPlay()
      //   this.forEachCell(clearAllCells)
      //   this.forEachCell(randomize)
      // })
      // document.getElementById('step_btn').addEventListener('click',()=>{
   
      //   this.step()
      // })
      // document.getElementById('play_btn').addEventListener('click',()=>
      // this.enableAutoPlay())
    }

    addButtonListeners(){
      var clearAllCells = function(element,x,y){
        //  let element= document.getElementById(`${x}-${y}`)
          element.className='dead'
          element.dataset.status='dead'
          console.log('FUCKING CLEARED')
      }
      var randomize=function(element,x,y){
        let num = Math.floor(Math.random()*2)
        console.log(num)
        // console.log(`${x}-${y}`)
        // let element =  document.getElementById(`${x}-${y}`)
        if(num){
          element.className='alive'
          element.dataset.status='alive'
        }
      } 
      //Adding event listeners to buttons
      document.getElementById('clear_btn').addEventListener('click',()=>{
        console.log('clear pressed')
        this.stopAutoPlay()
        this.forEachCell(clearAllCells)
      })
      document.getElementById('reset_btn').addEventListener('click',()=>{
        this.stopAutoPlay()
        this.forEachCell(clearAllCells)
        this.forEachCell(randomize)
      })
      document.getElementById('step_btn').addEventListener('click',()=>{
        console.log('step pressed')
        this.step()
      })
      document.getElementById('play_btn').addEventListener('click',()=>{
       console.log('play pressed')
        this.enableAutoPlay()
      })
    }


    getNeighborhood(element,x,y){
      // console.log('CALCULATING NEIGHBORHOOD!!!')
      let neighborhood=[]
        // let element=document.getElementById(`${x}-${y}`)
        // console.log(element)
        for(var col = x-1;col<=x+1;col++){
          for(var row=y-1;row<=y+1;row++){
            // console.log(col, row)
            if(document.getElementById(`${col}-${row}`)){
                let neighbor=document.getElementById(`${col}-${row}`)
                if(neighbor!==element)neighborhood.push(neighbor)
            }
          }
        }
        element.neighborhood=neighborhood
       
        return neighborhood
    }

    getNextState(element,x,y){
      let liveNeighbors=element.neighborhood.filter(neighbor=>neighbor.dataset.status==='alive').length
      console.log(liveNeighbors)
  
      //if function reutrns true, that mean the cell will be alive on next iteration
      if(element.dataset.status==='alive'){
        return (liveNeighbors===2|| liveNeighbors===3)
      }else{
        return (liveNeighbors === 3)
      }
    }
    applyState(nextStateArr){
      this.forEachCell((element,x,y)=>{
        // here we convert true/flase into 'alive or 'dead'
        let nextStatus = nextStateArr[x][y] ? 'alive' : 'dead';
        element.className = nextStatus
        element.dataset.status = nextStatus
      })
    }
    
    step() {
      let nextState = new Array(+this.state.width).fill('placeholder').map(el=>[])
      this.forEachCell((element,x,y)=>{
        nextState[x][y]=this.getNextState(element,x,y)
      })
  
      this.applyState(nextState)
     
      
      return [this.setAlive, this.setDead]
    }

    enableAutoPlay() {
      // Start Auto-Play by running the 'step' function
      // automatically repeatedly every fixed time interval 
  
        if(this.stepInterval){
          return this.stopAutoPlay();
        }
        this.stepInterval = setInterval(()=>{
         this.step()
          console.log(this)
          console.log(this.stepInterval)
        }, 200)
     
    }
    stopAutoPlay(){
      clearInterval(this.stepInterval)
      this.stepInterval=null
      console.log('STOP AUTOPLAY',this)
    }
    
    // componentDidMount(){
    //   this.createAndShowBoard()
    // }
    handleChange(evt){
      evt.preventDefault()
      let inputValue=evt.target.value
      let n = evt.target.name

      this.setState({
        [n]: inputValue
      });
      console.log(n,evt.target.value)
    }
    handleSubmit(evt){
      evt.preventDefault()
      console.log('FORM SUBMITTED')
      if(!this.state.boardDisplayed){
    let currentBoardDisplayed = this.state.boardDisplayed
     let newCurrentBoard = !currentBoardDisplayed
      this.setState({
        boardDisplayed: (!currentBoardDisplayed)
      })
      this.createAndShowBoard()
      //ADD ATTACH EVENT LISTENERS HERE 
      return;
    }
     console.log(this.state.boardDisplayed)
     //clear board 
     this.createAndShowBoard()
    }
    render(){
        
        return(
           <div style={{marginTop:'3em', height:'100%', position:'relative'}}>
           
           <table id='golBoard'></table>

            <div id='control_panel'>
                <button id='step_btn' className='btn btn-success'>Step</button>
                <button id='play_btn' className='btn btn-primary'>Play</button>
                <button id='reset_btn' className='btn btn-warning'>Reset Random</button>
                <button id='clear_btn' className='btn btn-info'>Clear</button>
             </div>

             <form id='tableSetup' onSubmit={this.checkForOldBoard} >
             Enter a board width and height of up to 120 to get started <br/>
             Width
             <input type="number" name="width" size="4" value={this.state.width} onChange={(evt)=>this.handleChange(evt)}></input>
             Height       
             <input type="number" name="height" size="4" value ={this.state.height} onChange={this.handleChange}></input>
             <input id="submit" type = "submit" value="submit" width="5em" />
           </form>

             <br/>

             <footer className="footer">
               <div className="container">
                 <p className="text-muted">Built by Jason Rosso at <a href="http://www.fullstackacademy.com/">Fullstack Academy</a></p>
               </div>
             </footer>
             
             <script src="game.js"></script>

           </div>
      
        )
    }
}