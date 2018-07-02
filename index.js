const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#ddd';
ctx.fillRect(0,0,900,500);

ctx.erase = function(x, y) {
  this.globalCompositeOperation = 'destination-out';
  this.strokeStyle = '#fff';
  this.lineJoin = 'round'; 
  this.lineWidth = 10;
  this.beginPath();
  this.moveTo(x, y);
  this.arc(x, y, 25, 0, Math.PI * 2, false);
  this.closePath();
  this.fill();
};

// listen to mouse events
canvas.onmousemove = e => {
    if (!canvas.isDrawing) {
        return;
    }
    const x = e.pageX - canvas.offsetLeft
    const y = e.pageY - canvas.offsetTop
    ctx.erase(x, y);
};

canvas.onmousedown = () => {
    canvas.isDrawing = true;
};

canvas.onmouseup = () => {
    canvas.isDrawing = false;
};