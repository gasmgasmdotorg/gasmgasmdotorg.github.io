var cnv;
var y = 0;
let s = 1.0;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.className = "fullscreen";
  album1 = new album(0, 40, 0);
  //img = loadImage('https://f4.bcbits.com/img/a3916325280_10.jpg');

  // set options to prevent default behaviors for swipe, pinch, etc
  var options = {
    preventDefault: true
  };

  // document.body registers gestures anywhere on the page
  var hammer = new Hammer(document.body, options);
  hammer.get('pinch').set({ enable: true });
  hammer.on("pinch", scaleRect);
}

function draw() {
  background(100, 202, 201);
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  ambientLight(255);
  pointLight(255, 255, 255, locX, locY, 100);
  //texture(img);

  album1.spin();
  album1.display();

  camera(0, 0, 200 * s, 0, 0, 0, 0, 1, 0);
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
    ambientMaterial(150, 100, 255);
    box(height - 350, height - 350, 10);
  }
}

function mouseReleased() {
   y = 0;
}

function scaleRect(event) {
  console.log(event);
  s = event.scale;
}
