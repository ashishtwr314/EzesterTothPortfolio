Number.randomInt = function(a) {
  return Math.floor(Math.random() * a);
};

Number.uniformRandom = function(a, b) {
  return Math.floor(a + Math.random() * (b - a));
};

var LINE_MAX = 2;
var LINE_SPEED = 10;
var FPS = 20;

var ww = window.innerWidth;
var wh = window.innerHeight;
var wwc = ww/2;
var whc = wh/2;
var lines_ = [];
var canvas = document.getElementById('canvas');
var ctx    = canvas.getContext('2d');
ctx.globalCompositeOperation = 'lighter';
canvas.width = ww;
canvas.height = wh;
canvas.setAttribute('id','canvas');

initLine();

var timer = setTimeout(animate, 1000 / FPS);

function animate() {
    animationRender();
    timer = setTimeout(animate, 1000 / FPS);
};

function animationRender() {
  ctx.clearRect(0, 0, ww, wh);

      for (var j = lines_.length; j--; ) {
        ctx.save();

        var line = lines_[j];
        var h = Math.cos(Date.now() / 6000) * 100;

        line.y -= line.speed;
        line.yy -= line.speed;

        ctx.strokeStyle = 'hsla('+ h +', 100%, 50%,' + line.alpha + ')';
        ctx.lineWidth = line.width;

        ctx.shadowBlur = 8;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowColor = 'hsla('+ h +', 100%, 50%,' + line.alpha * 2 + ')';

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.yy);
        ctx.stroke();

        if (line.yy < (0 - line.length)) {
            lines_.splice(j, 1, createLine());
        }

        ctx.restore();
    }
};


function initLine() {
    for (var i = 0; i < LINE_MAX; i++) {
        lines_.push(createLine(Number.uniformRandom(0, ww), Number.uniformRandom(wh * 0.8, wh * 2)));
    }
};

function createLine(x, y) {
    var w_ = Number.uniformRandom(1, 3);//width
    var l_ = Number.uniformRandom(wh * 0.7, wh * 1.5); //length
    var x_ = x || Number.uniformRandom(0, ww);
    var y_ = y || wh + l_ + 20;//move to
    var yy_ = y_ - l_;//lineTo
    var a_ = Number.uniformRandom(1, 8) / 10;//alpha
    var speed = LINE_SPEED;

    return {
        x : x_,
        y : y_,
        yy : yy_,
        length : l_,
        speed : speed,
        width : w_,
        alpha : a_
    };
};
