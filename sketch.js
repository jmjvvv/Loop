function setup() {
  createCanvas(640, 480);
  background(128, 0, 64);
  noFill();

  stroke(255, 0, 0);

/*
  var x;

  x = 1;
  ellipse(x * 100, 100, 50, 50);

  x = 2;
  ellipse(x * 100, 100, 50, 50);

  x = 3;
  ellipse(x * 100, 100, 50, 50);
  */
  for (var x = 1; x <= 8; x++)
  {
    ellipse(x * 20, x * 70 + 100, 20, 30);
  }
}
function draw() {
  background(128, 0, 64);

  ellipse(320, 240, mouseX, mouseY);
}
}