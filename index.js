// ================== Start Example 1 ==================
// First Example - background image

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const colorPicker = document.getElementById('color-picker');
const erasingTool = document.getElementById('erasing');
let color = colorPicker.value;
let erasing = false;

colorPicker.addEventListener('change', () => {
    color = colorPicker.value;
});

erasingTool.addEventListener('change', () => {
    erasing = !erasing;
})

ctx.drawOrErase = function(x, y, color) {
    this.beginPath();
    this.fillStyle = color;
    this.lineJoin = 'round';
    // if(erasing2){
    //     this.globalCompositeOperation = 'destination-out'
    // }
    this.moveTo(x, y);
    this.arc(x, y, 10, 0, Math.PI * 2, false);
    this.fill();
    this.closePath();
  };

// listen to mouse events
canvas.onmousemove = e => {
    const x = e.pageX - canvas.offsetLeft
    const y = e.pageY - canvas.offsetTop

    if (!canvas.mouseIsDown && !erasing) {
        return;
    }
    if(canvas.mouseIsDown){
        if(erasing){
            ctx.drawOrErase(x, y, '#fff');
        }
        if(!erasing) {
            ctx.drawOrErase(x, y, color);
        }
    }
};

canvas.onmousedown = () => {
    canvas.mouseIsDown = true;
};

canvas.onmouseup = () => {
    canvas.mouseIsDown = false;
};
// ================== End Example 1 ==================


// this.globalCompositeOperation = 'destination-out'



// ================== Start Example 2 ==================

// Second example - SCRATCH CARD
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
ctx2.fillStyle = '#ddd';
ctx2.fillRect(0,0,900,500);

ctx2.erase = function(x, y) {
  this.globalCompositeOperation = 'destination-out';
  this.lineJoin = 'round'; 
  this.lineWidth = 10;
  this.beginPath();
  this.moveTo(x, y);
  this.arc(x, y, 25, 0, Math.PI * 2, false);
  this.closePath();
  this.fill();
};

// listen to mouse events
canvas2.onmousemove = e => {
    if (!canvas2.isDrawing) {
        return;
    }
    const x = e.pageX - canvas2.offsetLeft
    const y = e.pageY - canvas2.offsetTop
    ctx2.erase(x, y);
};

canvas2.onmousedown = () => {
    canvas2.isDrawing = true;
};

canvas2.onmouseup = () => {
    canvas2.isDrawing = false;
};
// ================== End Example 2 ==================
