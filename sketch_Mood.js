var mood = function(p) {

var arr=[]
var Nparticles = 60;

p.setup = function(){
  
  p.createCanvas(p.windowWidth,p.windowHeight);

  p.background(255);

  for (var i=0;i<Nparticles;i++){
    arr.push(new p.particle());
  }

}

p.draw = function() {

  p.background(255);

  for (var i=0;i<Nparticles;i++){
  

  // for (var j=0;j<1;j++){
  //   p.strokeWeight(0.001);
  //   p.stroke(arr[i].r,arr[i].g,arr[i].b);
  //   p.bezier(arr[i].pos.x, arr[i].pos.y,40,-2,40,2,arr[j].pos.x, arr[j].pos.y);
  // }

    arr[i].move();
    arr[i].display();
  

  }

}

p.particle=function(){
  
  this.pos = p.createVector(p.random(0,p.windowWidth),p.random(0,p.windowHeight));
  // this.acceleration = p.createVector(p.random(-0.01,0.01),p.random(-0.01,0.01));
  this.acceleration = 0;
  this.velocity = p.createVector(p.random(-1,1),p.random(-1,1));
  this.edgeLength = p.random(40,200);
  this.nSides = p.random(3,15);

  this.r = p.random(40,120);
  this.g = p.random(120,210);
  this.b = p.random(200,255);
  
  this.alph = p.random(0,100);

  this.move = function(){
     this.velocity.add(this.acceleration);
     this.pos.add(this.velocity);
     
     if (this.pos.x>p.windowWidth-this.edgeLength || this.pos.x<0+this.edgeLength){
        this.velocity.x*=-1;
     }

     if(this.pos.y>p.windowHeight-this.edgeLength || this.pos.y<0+this.edgeLength){
        this.velocity.y*=-1;      
     }
  }

  this.display = function(){
    p.noStroke();
    p.fill(this.r,this.g,this.b,this.alph);
    this.polygon(this.pos.x,this.pos.y,this.edgeLength,this.nSides);
    }

  this.polygon = function(x, y, radius, npoints) {
    var angle = p.TWO_PI / npoints;
    p.beginShape();
    for (var a = 0; a < p.TWO_PI; a += angle) {
      var sx = x + p.cos(a) * radius;
      var sy = y + p.sin(a) * radius;
      p.vertex(sx, sy);
    }
    p.endShape(p.CLOSE);
    }
}

}
var myp5 = new p5(mood);