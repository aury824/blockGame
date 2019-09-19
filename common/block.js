// 문서가 준비(html, 이미지, 스크립트, 스타일 등)되면 실행
window.onload = function() {
    console.log(myGameArea.message.docIsReady);
    myGameArea.start(); //window.myGameArea.start()
    this.myGamePiece = new Component(30, 30, "red", 10, 120);
}

var myGamePiece;

// 환경정보를 가진 객체
var myGameArea = {
    canvas : document.createElement("canvas"),
    message : {
        docIsReady:  "문서가 준비되었습니다."
    },
    key: false,
    // context
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        // document.body.insertBefore(무엇, 어디);
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        //var ctx = myGameArea.canvas.getContext("2d");
        this.context = this.canvas.getContext("2d");
        // 타이머 적용
        this.interval = setInterval(updateGameArea, 20); // 초당 50번 updateGameArea를 호출
        this.btns = document.querySelectorAll(".controll > button");
        this.btns[0].addEventListener("mousedown", moveUp);
        this.btns[0].addEventListener("mouseup", moveStop);
        this.btns[1].addEventListener("mousedown", moveLeft);
        this.btns[1].addEventListener("mouseup", moveStop);
        this.btns[3].addEventListener("mousedown", moveDown);
        this.btns[3].addEventListener("mouseup", moveStop);
        window.addEventListener('keydown', function(e){
            myGameArea.key = e.keyCode;
        });
        window.addEventListener('keyup', function(e){
            myGameArea.key = false;
        });
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

// 컴포넌트 생성자 함수
function Component(w, h, c, x, y) {
  this.x = x;
  this.y = y;
  this.c = c;
  this.w = w;
  this.h = h;
  this.speedX = 0;
  this.speedY = 0;
  // 외부 실행을 위해 함수에 포함
  this.update = function() {
      ctx = myGameArea.context;
      ctx.fillStyle = c;
      ctx.fillRect(this.x,this.y,this.w,this.h);
  }
  this.newPos = function() {
      this.x = this.x + this.speedX;
      this.y += this.speedY;
  }
}

function moveUp() {
    myGamePiece.speedY = -1;
}

function moveDown() {
    myGamePiece.speedY = 1;
}

function moveRight() {
    myGamePiece.speedX = 1;
}

function moveLeft() {
    myGamePiece.speedX = -1;
}

function moveStop() {
    myGamePiece.speedX = myGamePiece.speedY = 0;
}

// 화면제어를 위한 함수
function updateGameArea() {
    var mGAkey = myGameArea.key;
    myGameArea.clear();
    // myGamePiece.x += 1
    if(mGAkey && mGAkey === 37) { myGamePiece.speedX = -1; }
    if(mGAkey && mGAkey === 39) myGamePiece.speedX = 1;
    if(mGAkey && mGAkey === 38) myGamePiece.speedY = -1;
    if(mGAkey && mGAkey === 40) myGamePiece.speedY = 1;
    if(!mGAkey) moveStop();
    myGamePiece.newPos();
    myGamePiece.update();
}