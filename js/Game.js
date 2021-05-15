class Game {
  constructor(){}
  
  //arrow function ()=>{} , this fun is used as a callback to do sub-task
  getState(){// to read from firebase
    database.ref('/gameState').on("value", (changed)=>{
      var gameState = changed.val()
    } )
  }

  updateState(state){// to update to firebase
  
    database.ref('/gameState').update(

        //update happend in json { key: value}
      {
        gameState: state
      }
    )
  }

  start(){
    if(gameState === 0){
      //display the login form

      form = new Form();
      form.display();
    }
  }

  play(){

  }
}
