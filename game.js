/*const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d")
const largeure = canvas.width
const hauteure = canvas.height

function genereParabole() {
    let a = parseFloat(document.getElementById("a").value)
    let b = parseFloat(document.getElementById("b").value)
    let c = parseFloat(document.getElementById("c").value)
    ctx.reset()

    ctx.beginPath()
    ctx.strokeStyle = "blue"

    const diminution = 20
    for (let x = 0; x <= largeure; x++) {
        let yDessin = (a * x * x + b * x + c)
        yDessin = (-1 * (yDessin * diminution)) + hauteure
        let xDessin
    }
    ctx.stroke()
}
*/



const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d")
const largeure = canvas.width
const hauteure = canvas.height
drawEnemyTank()
drawTank()

function genereParabole() {
    let a = parseFloat(document.getElementById("a").value) || 1
    let b = parseFloat(document.getElementById("b").value) || 0
    let c = parseFloat(document.getElementById("c").value) || 0
    ctx.reset()
    drawEnemyTank()
    drawTank()
    ctx.beginPath()
    ctx.strokeStyle = "blue"
    ctx.lineWidth = 2

    const diminution = 20
    ctx.moveTo(0, c)
    for (let x = 0; x <= 1000; x++) {
        let mathX = x / diminution
        let mathY = (a * Math.pow(mathX, 2) + (b * mathX) + c)
                 
        let xDessin = x
        let y = (-1 * (mathY * diminution)) + 400

        ctx.lineTo(xDessin, y)
        /*if ( x === c) {
            ctx.moveTo(0, c)
        } else if (!(x <= 1)) {
            ctx.lineTo(xDessin, y)
        }
            */
    }
    ctx.stroke()
}




//source : https://www.sitepoint.com/generate-random-numbers-javascript/ 
function randomPositionPlayerX(minX, maxX) {
  minX = Math.ceil(minX);
  maxX = Math.floor(maxX);
  return Math.floor(Math.random() * (maxX - minX + 1)) + minX;
}
function randomPositionPlayerY(minY, maxY) {
  minY = Math.ceil(minY);
  maxY = Math.floor(maxY);
  return Math.floor(Math.random() * (maxY - minY + 1)) + minY;
}

//source : https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
function drawTank(){


    const imgPlayerTank = new Image();
    imgPlayerTank.src = "https://www.freepnglogos.com/uploads/dot-png/file-location-dot-red-svg-wikipedia-0.png"

    imgPlayerTank.onload = function() {
        // Basic drawing: ctx.drawImage(image, x, y, width, height)
        ctx.drawImage(imgPlayerTank, 10, 10, 150, 150);
    };
}

//source : https://www.sitepoint.com/generate-random-numbers-javascript/ 
function randomPositionEnemyX(minX, maxX) {
  minX = Math.ceil(minX);
  maxX = Math.floor(maxX);
  return Math.floor(Math.random() * (maxX - minX + 1)) + minX;
}
function randomPositionEnemyY(minY, maxY) {
  minY = Math.ceil(minY);
  maxY = Math.floor(maxY);
  return Math.floor(Math.random() * (maxY - minY + 1)) + minY;
}

//source : https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
function drawEnemyTank(){


const imgEnemyTank = new Image();
imgEnemyTank.src = "https://www.freepnglogos.com/uploads/dot-png/file-location-dot-red-svg-wikipedia-0.png"

imgEnemyTank.onload = function() {
    // Basic drawing: ctx.drawImage(image, x, y, width, height)
    ctx.drawImage(imgEnemyTank, 500, 30, 150, 150);
};
}
