function setup() {
  createCanvas(900, 900);
}
function draw() {
  background(124,124,124);
  let x0 = 120;
  let y0 = 180;
  let r0 = 60;

  let x1 = mouseX;
  let y1 = mouseY;
  let r1 = 120;


  noFill();
  strokeWeight(3);

  circle(x0, y0, 2*r0)
  circle(x1, y1, 2*r1)

  let distance = sqrt( (x1-x0)**2 + (y1-y0)**2 );
  let distanceComma2 = nfc(distance, 2);
  let distanceText = `Distance: ${distanceComma2}`;
  console.log(distanceText);

  strokeWeight(1);
  stroke(0);
  textSize(32);
  text(distanceText, 3, 420);

  let isHit = distance < r0 + r1;
  let isHitText = `2 Circles are Hit?: ${isHit}`;
  text(isHitText, 3, 520)
}
