// ================== Start Example 1 ==================
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

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

ctx1.drawOrErase = function(x, y, color) {
    this.beginPath();
    this.fillStyle = color;
    this.lineJoin = 'round';
    this.moveTo(x, y);
    this.arc(x, y, 10, 0, Math.PI * 2, false);
    this.fill();
    this.closePath();
  };

// listen to mouse events
canvas1.onmousemove = e => {
    const x = e.pageX - canvas1.offsetLeft
    const y = e.pageY - canvas1.offsetTop

    if (!canvas1.mouseIsDown && !erasing) {
        return;
    }
    if(canvas1.mouseIsDown){
        if(erasing){
            ctx1.drawOrErase(x, y, '#fff');
        }
        if(!erasing) {
            ctx1.drawOrErase(x, y, color);
        }
    }
};

canvas1.onmousedown = () => {
    canvas1.mouseIsDown = true;
};

canvas1.onmouseup = () => {
    canvas1.mouseIsDown = false;
};

// ================== End Example 1 ==================



// ================== Start Example 2 ==================
// Second Example - background image

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

const colorPicker2 = document.getElementById('color-picker2');
const erasingTool2 = document.getElementById('erasing2');
let color2 = colorPicker2.value;
let erasing2 = false;

colorPicker2.addEventListener('change', () => {
    color2 = colorPicker2.value;
});

erasingTool2.addEventListener('change', () => {
    erasing2 = !erasing2;
})

ctx2.drawOrErase = function(x, y, color2) {
    this.beginPath();
    this.fillStyle = color2;
    this.lineJoin = 'round';
    this.moveTo(x, y);
    this.arc(x, y, 10, 0, Math.PI * 2, false);
    this.fill();
    this.closePath();
  };

// listen to mouse events
canvas2.onmousemove = e => {
    const x = e.pageX - canvas2.offsetLeft
    const y = e.pageY - canvas2.offsetTop

    if (!canvas2.mouseIsDown && !erasing) {
        return;
    }
    if(canvas2.mouseIsDown){
        if(erasing2){
            ctx2.drawOrErase(x, y, '#fff');
        }
        if(!erasing2) {
            ctx2.drawOrErase(x, y, color2);
        }
    }
};

canvas2.onmousedown = () => {
    canvas2.mouseIsDown = true;
};

canvas2.onmouseup = () => {
    canvas2.mouseIsDown = false;
};
// ================== End Example 2 ==================





// ================== Start Example 3 ==================

// THIRD EXAMPLE - SCRATCH CARD
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
ctx3.fillStyle = '#ddd';
ctx3.fillRect(0,0,900,500);

ctx3.erase = function(x, y) {
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
canvas3.onmousemove = e => {
    if (!canvas3.isDrawing) {
        return;
    }
    const x = e.pageX - canvas3.offsetLeft
    const y = e.pageY - canvas3.offsetTop
    ctx3.erase(x, y);
};

canvas3.onmousedown = () => {
    canvas3.isDrawing = true;
};

canvas3.onmouseup = () => {
    canvas3.isDrawing = false;
};
// ================== End Example 3 ==================
