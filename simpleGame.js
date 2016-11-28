var counter = document.getElementById("counter")
var score = 0
var timeStart = Date.now()
var move = true
document.addEventListener("keydown", function(e) {

  var playerPosX = Number(document.getElementById("player").getAttribute("x"))
  var playerPosY = Number(document.getElementById("player").getAttribute("y"))
  var itemPosX = Number(document.getElementById("item").getAttribute("x"))
  var itemPosY = Number(document.getElementById("item").getAttribute("y"))
  var itemPosX2 = Number(document.getElementById("item2").getAttribute("x"))
  var itemPosY2 = Number(document.getElementById("item2").getAttribute("y"))

if(move == true){
  if(e.keyCode == 39 && playerPosX < 780) { //right
    document.getElementById("player").setAttribute("x",playerPosX+15)
  //  playerPosX = playerPosX + 15
  }

 else if(e.keyCode == 37 && playerPosX > 0){ //left
    document.getElementById("player").setAttribute("x",playerPosX-15)
  //  playerPosX = playerPosX - 15
  }

 else if(e.keyCode == 38 && playerPosY > 0){ //up
    document.getElementById("player").setAttribute("y",playerPosY-15)
  //  playerPosY = playerPosY - 15
  }

 else if(e.keyCode == 40 && playerPosY < 370){ //up
    document.getElementById("player").setAttribute("y",playerPosY+15)
    //playerPosY = playerPosY + 15
  }
}
  if(playerPosX+35 > itemPosX && playerPosX+35 < itemPosX+50 && playerPosY+35 > itemPosY && playerPosY+35 < itemPosY+50){
    score += 1
    counter.textContent = "Score:"+score;
    var ranX =  Math.floor(Math.random()*(800)+1);
    itemPosX = ranX;
    document.getElementById("item").setAttribute("x",ranX);
  }

  if(playerPosX+35 > itemPosX2 && playerPosX+35 < itemPosX2+50 && playerPosY+35 > itemPosY2 && playerPosY+35 < itemPosY2+50){
    score += 1
    counter.textContent = "Score:"+score;
    var ranX =  Math.floor(Math.random()*(780)+1);
    itemPosX2 = ranX;
    document.getElementById("item2").setAttribute("x",ranX);
  }

  if(score == 10){
    document.getElementById("screen").pauseAnimations()
    var timeStop = Date.now()
    move = false
    var timeTook = timeStop-timeStart
    document.getElementById("timeCounter").textContent = "Time Taken:" + (timeTook/1000)
    document.getElementById("screen").setAttribute("style", "background-image: url('http://cdn.digitaloperative.com/wp-content/uploads/2012/11/koolaid.jpg')")
  }
})
