class Form {
  constructor(){
    //special member fun of class
    // stores and initializes properties

  
  }

  display(){
    createElement("h2", "Car Racing Game" ).position(130, 20);
    var input = createInput().position(140, 180).attribute("placeholder", "Name");
    var button = createButton("Play").attribute("style", "background-color: silver; color: blue").position(190, 220);
  

   button.mousePressed(()=>{
    
     var name = input.value()
     console.log(name)
     this.greeting = createElement("h3", "Hello "+ name).position(150, 45)
   }) 
  }
}