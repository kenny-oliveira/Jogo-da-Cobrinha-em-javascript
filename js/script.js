let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let pontos = 0;
let box = 32;
let snake = [];
let comida = {x:Math.floor(Math.random()*15+1)*box,y:Math.floor(Math.random()*15+1)*box};
let direction = "right";
snake[0] = {
    x: 8*box,
    y: 8*box
};

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16*box,16*box);
}

function criarCobra(){
    for (i=0;i<snake.length;i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x,snake[i].y, box, box);
    }
}

document.addEventListener('keydown',update);

function update(event){
    if (event.keyCode == 37 && direction != "right"){
     direction = "left";
    }else if (event.keyCode == 39 && direction != "left"){
     direction = "right";
    }else if (event.keyCode == 38 && direction != "down"){
     direction = "up"
    }else if (event.keyCode == 40 && direction != "up"){
     direction = "down"
    }
}

function DesenharComida(){
   context.fillStyle = "red";
   context.fillRect(comida.x,comida.y,box,box);
}

function iniciarJogo(){
  if (snake[0].x > 15 * box && direction == "right"){
    snake[0].x = 0;
    if (snake[0].y > 15 * box){
        snake[0].y = snake[0].y-(1*box);
      }
    console.log("direction right")
  }
  if (snake[0].x < 0 && direction == "left"){
    snake[0].x = 16*box;
    console.log("direction left")
  }
  if (snake[0].y > 15 * box && direction == "down"){
    snake[0].y = 0;
    console.log("direction down")
  }
  if (snake[0].y < 0 && direction == "up"){
    snake[0].y = 16*box;
    if (snake[0].x > 15 * box){
    snake[0].x = snake[0].x-(1*box)
    }
    console.log("direction up")
  }

for (i=1;i<snake.length;i++){
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y){
        clearInterval(jogo);
        document.getElementById("GAMEOVER").innerHTML = "Game Over, Atualize a pagina para começar um novo jogo"
    }
}

  criarBG();
  criarCobra();
  DesenharComida();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction == "right") {
    snakeX += box;      
  }else if (direction == "left"){
      snakeX -= box;
  }else if (direction == "up"){
      snakeY -= box;
  }else{
      snakeY += box;
  }

if (snakeX != comida.x || snakeY != comida.y){
  snake.pop();
   }else{
  comida.x=  Math.floor(Math.random()*15+1)*box;
  comida.y = Math.floor(Math.random()*15+1)*box;
  pontos++;
  document.getElementById("pontuacao").innerHTML = "Pontuação : "+pontos;
}

  let newHead = {
      x: snakeX,
      y: snakeY,
  }

  snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo,100);