function setup() {
  createCanvas(900, 900);
}
function getDistance(circleObjectA, circleObjectB) {
  let x0 = circleObjectA.x;
  let y0 = circleObjectA.y;
  let x1 = circleObjectB.x;
  let y1 = circleObjectB.y;

  let distance = sqrt( (x1-x0)**2 + (y1-y0)**2 );
  let distanceComma2 = nfc(distance, 2);
  let distanceText = `Distance: ${distanceComma2}`;
  return distanceText;
}
function displayText(message,fromLeft,fromTop){
  strokeWeight(1);
  stroke(0);
  textSize(32);
  text(message, fromLeft, fromTop);
}
function isHit(circleA, circleB) {
  let distance = getDistance(circleA, circleB);
  let isHit = distance < circleA.r + circleB.r;
  return isHit
}
function drawCircle(circleObject){
  circle(circleObject.x, circleObject.y, 2*circleObject.r)
}
function draw() {
  const circleA = {
    x: 120,
    y: 180,
    r: 60,
  };
  const circleB = {
    x: mouseX,
    y: mouseY,
    r: 120,
  }
  background(124,124,124);
  noFill();
  strokeWeight(3);

  const distanceOf0and1 = getDistance(circleA, circleB);
  console.log(distanceOf0and1);

  displayText(distanceOf0and1, 3, 420)

  drawCircle(circleA)
  drawCircle(circleB)

  isHit(circleA, circleB)

  text(`2 Circles are Hit?: ${isHit(circleA, circleB)}`, 3, 520)
}
