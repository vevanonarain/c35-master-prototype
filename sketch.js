var form,helper,database,helperCount;
var gameState=0;

function setup(){
  createCanvas(400,400);
  database=firebase.database();
  
  form = new Form();
}

function draw(){
    form.display();
    helper.update(name);
    helper.updateCount(count);
    helper.getCount();
}