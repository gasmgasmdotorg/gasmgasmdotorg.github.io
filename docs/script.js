var cnv;
var y = 0;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.className = "fullscreen";
  album1 = new album(0, 40, 0);
  //img = loadImage('https://f4.bcbits.com/img/a3916325280_10.jpg');
}

function draw() {
  background(247, 202, 201);
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  ambientLight(255);
  pointLight(255, 255, 255, locX, locY, 100);
  //texture(img);

  album1.spin();
  album1.display();
}

class album {
  constructor(x, y1, z) {
    this.x = x;
    this.y = y1;
    this.z = z;
  }

  spin() {
    if (mouseX > width/2 - (height - 350)/2 && mouseX < width/2 + (height - 350)/2) {
      if (mouseIsPressed) {
        y = PI / mouseX  * 100
      }
    }
  }

  display() {
    translate(this.x, this.y, this.z);
    strokeWeight(2);
    rotateY(y);
    ambientMaterial(247, 100, 201);
    box(height - 350, height - 350, 10);
  }
}

function mouseReleased() {
   y = 0;
}
